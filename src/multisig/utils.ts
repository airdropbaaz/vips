import Safe, { ContractNetworksConfig, EthersAdapter } from "@safe-global/protocol-kit";
import { MetaTransactionData, SafeTransaction } from "@safe-global/safe-core-sdk-types";
import { ethers, network } from "hardhat";

import { Proposal, SUPPORTED_NETWORKS } from "../../src/types";
import { NETWORK_ADDRESSES } from "../networkAddresses";

const DEFAULT_OPERATION = 0; // Call

export const loadMultisigTx = async (multisigVipPath: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const vip = require(`../../multisig/proposals/${multisigVipPath}`).default;
  return vip();
};

export const getSafeAddress = (networkName: Exclude<SUPPORTED_NETWORKS, "bsctestnet" | "bscmainnet">): string => {
  return NETWORK_ADDRESSES[networkName].GUARDIAN;
};

export const buildMultiSigTx = async (proposal: Proposal): Promise<MetaTransactionData[]> => {
  const { signatures, targets, params, values } = proposal;
  const safeTransactionData: MetaTransactionData[] = [];
  for (let i = 0; i < signatures.length; ++i) {
    const abi = new ethers.utils.Interface([`function ${signatures[i]}`]);
    const safeTxData: MetaTransactionData = {
      to: targets[i],
      data: abi.encodeFunctionData(signatures[i], params[i]),
      value: values[i].toString(),
      operation: DEFAULT_OPERATION,
    };

    safeTransactionData.push(safeTxData);
  }
  return safeTransactionData;
};

export const createGnosisTx = async (
  ethAdapter: EthersAdapter,
  safeSdk: Safe,
  multisigVipPath: string,
): Promise<SafeTransaction> => {
  const proposal = await loadMultisigTx(multisigVipPath);

  const safeTransactionData = await buildMultiSigTx(proposal);

  return await safeSdk.createTransaction({ safeTransactionData });
};

export const getContractNetworks = (chainId: number): ContractNetworksConfig => {
  // Define contract addresses for different networks here
  const networks: Record<string, ContractNetworksConfig> = {
    // Sepolia network
    sepolia: {
      [chainId]: {
        safeMasterCopyAddress: "0x42f9B1A23193465A4049DA3af93f9faBF3054951",
        safeProxyFactoryAddress: "0x4cEeffCE2e51cFaD71bF23C816756b9D789395cC",
        multiSendAddress: "0xE4BDFeD788718f1FA72C249e100B21eAE5a549e4",
        multiSendCallOnlyAddress: "0x028664f9c577698Ae250cAA51ADC22377B03ec4A",
        fallbackHandlerAddress: "0x1259Aa9FaCd0feFB5a91da65682C7EDD51608D4b",
        signMessageLibAddress: "0xaF838B48F16728169E78985Cc8eB1bda25D75B29",
        createCallAddress: "0x6B95D96C78F6433992A5F81aEcF82bAE449016Df",
        simulateTxAccessorAddress: "0x249b0178432e34320D7d30A4A9699cAf23Bcf04c",
      },
    },
    opbnbtestnet: {
      [chainId]: {
        safeMasterCopyAddress: "0xE2CF742b554F466d5E7a37C371FD47C786d2FBc0",
        safeProxyFactoryAddress: "0x9fea7F7C69f14aa1a7d62cC9D468fEB2F9371CB3",
        multiSendAddress: "0xDeB0467cCfAda493902C8D279A2F41f26b813AC9",
        multiSendCallOnlyAddress: "0xC33224E130C702808e12299eCaBC16148a5B3d0B",
        fallbackHandlerAddress: "0x40B30946045a876ffD68CaF008f94eeAAD50F855",
        signMessageLibAddress: "0x6ACe153bF757b4999c7D6f0F3dFb1043dC67d61a",
        createCallAddress: "0x392e2F66c3BBF0046c861e0065fB7C7917b18078",
        simulateTxAccessorAddress: "0xd77D8020bEa6Aad4f5D636b1EB1FB3B9d08bbb7F",
      },
    },
    arbitrumsepolia: {
      [chainId]: {
        safeMasterCopyAddress: "0xc40483C21728BF342e4C0d1Ca693AdDC6c0b6dbA",
        safeProxyFactoryAddress: "0x9E52EFCAD3db5191B4Cb69CaBdCe4F356119F8d8",
        multiSendAddress: "0x6B02AbB69337C8dF8Ad312D6c5C2D58711736a36",
        multiSendCallOnlyAddress: "0x50542C494932F79FcB15Ab0e25CA08BB8610b03f",
        fallbackHandlerAddress: "0xE0C5C79D9CB5Bfa096b10396B1AE9FbBFc860fA6",
        signMessageLibAddress: "0x37942Af543F6E8E8e8E2784fb3C989c957FE4097",
        createCallAddress: "0xD79AcAdDC21A2e7A9D15Fff711Ec47def7259DD3",
        simulateTxAccessorAddress: "0xd55A98150e0F9f5e3F6280FC25617A5C93d96007",
      },
    },
    // Add more networks as needed
  };

  if (network.name in networks) {
    return networks[network.name];
  } else {
    throw new Error(`Network ${network.name} is not supported.`);
  }
};
