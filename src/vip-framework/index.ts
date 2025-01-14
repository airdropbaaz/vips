import { TransactionResponse } from "@ethersproject/providers";
import { loadFixture, mine, mineUpTo, time } from "@nomicfoundation/hardhat-network-helpers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract, ContractInterface } from "ethers";
import { FORKED_NETWORK, ethers } from "hardhat";

import { NETWORK_ADDRESSES } from "../networkAddresses";
import { NETWORK_CONFIG } from "../networkConfig";
import { Proposal, SUPPORTED_NETWORKS } from "../types";
import { getCalldatas, initMainnetUser, setForkBlock } from "../utils";
import GOVERNOR_BRAVO_DELEGATE_ABI from "./abi/governorBravoDelegateAbi.json";

const DEFAULT_SUPPORTER_ADDRESS = "0xc444949e0054a23c44fc45789738bdf64aed2391";

const VOTING_PERIOD = 28800;

export const { DEFAULT_PROPOSER_ADDRESS, GOVERNOR_PROXY, NORMAL_TIMELOCK } =
  NETWORK_ADDRESSES[FORKED_NETWORK as "bsctestnet" | "bscmainnet"] || {};

export const { DELAY_BLOCKS } = NETWORK_CONFIG[FORKED_NETWORK as SUPPORTED_NETWORKS];

export const forking = (blockNumber: number, fn: () => void) => {
  describe(`At block #${blockNumber}`, () => {
    before(async () => {
      await setForkBlock(blockNumber);
    });
    fn();
  });
};

export interface TestingOptions {
  governorAbi?: ContractInterface;
  proposer?: string;
  supporter?: string;
  callbackAfterExecution?: (trx: TransactionResponse) => void;
}

const executeCommand = async (timelock: SignerWithAddress, proposal: Proposal, commandIdx: number): Promise<void> => {
  const encodeMethodCall = (signature: string, params: any[]): string => {
    if (signature === "") {
      return "0x";
    }
    const iface = new ethers.utils.Interface([`function ${signature}`]);
    const canonicalSignature = iface.fragments[0].format();
    if (signature !== canonicalSignature) {
      throw new Error(`Signature "${signature}" should be in the canonical form: "${canonicalSignature}"`);
    }
    return iface.encodeFunctionData(signature, params);
  };

  await timelock.sendTransaction({
    to: proposal.targets[commandIdx],
    value: proposal.values[commandIdx],
    data: encodeMethodCall(proposal.signatures[commandIdx], proposal.params[commandIdx]),
    gasLimit: 8000000,
  });
};

export const pretendExecutingVip = async (proposal: Proposal) => {
  const impersonatedTimelock = await initMainnetUser(NORMAL_TIMELOCK, ethers.utils.parseEther("2.0"));
  for (let i = 0; i < proposal.signatures.length; ++i) {
    await executeCommand(impersonatedTimelock, proposal, i);
  }
};

export const testVip = (description: string, proposal: Proposal, options: TestingOptions = {}) => {
  let impersonatedTimelock: SignerWithAddress;
  let governorProxy: Contract;
  let proposer: SignerWithAddress;
  let supporter: SignerWithAddress;

  const governanceFixture = async (): Promise<void> => {
    const proposerAddress = options.proposer ?? DEFAULT_PROPOSER_ADDRESS;
    const supporterAddress = options.supporter ?? DEFAULT_SUPPORTER_ADDRESS;
    proposer = await initMainnetUser(proposerAddress, ethers.utils.parseEther("1.0"));
    supporter = await initMainnetUser(supporterAddress, ethers.utils.parseEther("1.0"));
    impersonatedTimelock = await initMainnetUser(NORMAL_TIMELOCK, ethers.utils.parseEther("40"));

    // Iniitalize impl via Proxy
    governorProxy = await ethers.getContractAt(
      (options.governorAbi ?? GOVERNOR_BRAVO_DELEGATE_ABI) as string,
      GOVERNOR_PROXY,
    );
  };

  describe(`${description} commands`, () => {
    before(async () => {
      await loadFixture(governanceFixture);
    });

    proposal.signatures.map((signature, i) => {
      it(`executes ${signature} successfully`, async () => {
        await executeCommand(impersonatedTimelock, proposal, i);
      });
    });
  });

  describe(`${description} execution`, () => {
    before(async () => {
      await loadFixture(governanceFixture);
    });

    let proposalId: number;

    it("can be proposed", async () => {
      const { targets, signatures, values, meta } = proposal;
      const proposalIdBefore = await governorProxy.callStatic.proposalCount();
      let tx;
      if (proposal.type === undefined || proposal.type === null) {
        tx = await governorProxy
          .connect(proposer)
          .propose(targets, values, signatures, getCalldatas(proposal), JSON.stringify(meta));
      } else {
        tx = await governorProxy
          .connect(proposer)
          .propose(targets, values, signatures, getCalldatas(proposal), JSON.stringify(meta), proposal.type);
      }
      await tx.wait();
      proposalId = await governorProxy.callStatic.proposalCount();
      expect(proposalIdBefore.add(1)).to.equal(proposalId);
    });

    it("should be voteable", async () => {
      const proposalConfig = await governorProxy.proposalConfigs(proposal.type);
      const votingDelay = await proposalConfig.votingDelay;
      await mine(votingDelay);
      await expect(governorProxy.connect(proposer).castVote(proposalId, 1)).to.emit(governorProxy, "VoteCast");
      await expect(governorProxy.connect(supporter).castVote(proposalId, 1)).to.emit(governorProxy, "VoteCast");
    });

    it("should be queued successfully", async () => {
      await mineUpTo((await ethers.provider.getBlockNumber()) + VOTING_PERIOD + 1);
      const tx = await governorProxy.connect(proposer).queue(proposalId);
      await tx.wait();
    });

    it("should be executed successfully", async () => {
      await mineUpTo((await ethers.provider.getBlockNumber()) + DELAY_BLOCKS[proposal.type || 0]);
      const blockchainProposal = await governorProxy.proposals(proposalId);
      await time.increaseTo(blockchainProposal.eta.toNumber());
      const tx = await governorProxy.connect(proposer).execute(proposalId);

      if (options.callbackAfterExecution) {
        await options.callbackAfterExecution(tx);
      }
    });
  });
};
