import { expect } from "chai";
import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";

import { expectEvents, initMainnetUser } from "../../../src/utils";
import { forking, testVip } from "../../../src/vip-framework";
import {
  NEW_RISK_FUND_CONVERTER_IMP,
  NEW_SINGLE_TOKEN_CONVERTER_IMP,
  PROXY_ADMIN,
  RISK_FUND_CONVERTER_PROXY,
  SINGLE_TOKEN_CONVERTER_BEACON,
  vipConverter,
} from "../../../vips/vip-converter/bscmainnet";
import BEACON_ABI from "../abi/Beacon.json";
import DEFAULT_PROXY_ADMIN_ABI from "../abi/DefaultProxyAdmin.json";
import PROTOCOL_SHARE_RESERVE_ABI from "../abi/ProtocolShareReserve.json";
import TRANSPARENT_PROXY_ABI from "../abi/TransparentProxyAbi.json";

const NORMAL_TIMELOCK = "0x939bD8d64c0A9583A7Dcea9933f7b21697ab6396";

const COMPTROLLER = "0xfD36E2c2a6789Db23113685031d7F16329158384";
const ASSETS = [
  "0x55d398326f99059ff775485246999027b3197955",
  "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
  "0x40af3827f39d0eacbf4a168f8d4ee67c121d11c9",
  "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
  "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
  "0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3",
  "0xc5f0f7b66764f6ec8c8dff7ba683102295e16409",
];

const PROTOCOL_SHARE_RESERVE_PROXY = "0xCa01D5A9A248a830E9D93231e791B1afFed7c446";

forking(35781703, () => {
  const provider = ethers.provider;
  let impersonatedTimelock: Signer;
  let proxyAdmin: Contract;
  let protocolShareReserve: Contract;
  let beacon: Contract;

  before(async () => {
    proxyAdmin = new ethers.Contract(PROXY_ADMIN, DEFAULT_PROXY_ADMIN_ABI, provider);
    beacon = new ethers.Contract(SINGLE_TOKEN_CONVERTER_BEACON, BEACON_ABI, provider);
    impersonatedTimelock = await initMainnetUser(NORMAL_TIMELOCK, ethers.utils.parseEther("1"));

    protocolShareReserve = new ethers.Contract(PROTOCOL_SHARE_RESERVE_PROXY, PROTOCOL_SHARE_RESERVE_ABI, provider);
  });

  testVip("VIP-Converter", vipConverter(), {
    callbackAfterExecution: async (txResponse: any) => {
      await expectEvents(txResponse, [TRANSPARENT_PROXY_ABI], ["Upgraded"], [1]);
    },
  });

  describe("Post-VIP behavior", () => {
    it("release funds should execute successfully", async () => {
      await protocolShareReserve.connect(impersonatedTimelock).releaseFunds(COMPTROLLER, ASSETS);
    });

    it("RiskFundConverter and SingleTokenConverter should have new implementation", async () => {
      expect(await proxyAdmin.getProxyImplementation(RISK_FUND_CONVERTER_PROXY)).to.equal(NEW_RISK_FUND_CONVERTER_IMP);
      expect(await beacon.implementation()).to.equal(NEW_SINGLE_TOKEN_CONVERTER_IMP);
    });
  });
});
