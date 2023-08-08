import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

import { forking, testVip } from "../../../src/vip-framework";
import { vip152Testnet } from "../../../vips/vip-152-testnet";
import vBNB_ABI from "./abi/vBNB.json"

const COMPTROLLER_ADDRESS = "0x94d1820b2D1c7c7452A163983Dc888CEC546b77D";
const vBNB_ADDRESS = "0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c";
const WBNB_ADDRESS = "0x94d1820b2D1c7c7452A163983Dc888CEC546b77D";
const NORMAL_TIMELOCK = "0xce10739590001705F7FF231611ba4A48B2820327";
const vBNB_ADMIN_ADDRESS = "";
const VTOKEN_TREASURY_ADDRESS = "0x8b293600C50D6fbdc6Ed4251cc75ECe29880276f";
const ACM = "0x45f8a08f534f34a97187626e05d4b6648eeaa9aa";
const VBNBAdmin_IMPLEMENTATION = "0x81d8560bb3686f6578e99f93387CCb9b61F4ddB6";
const VBNBAdmin_ADDRESS = "0x0CbA1b840cAdBec6cAe82a1c66E5F7C2973767fB"
const CURRENT_ADMIN = "0x2Ce1d0ffD7E869D9DF33e28552b12DdDed326706";

forking(32099629, () => {
  const provider = ethers.provider;

  describe("Pre-VIP behavior", async () => {
    let vBNB: ethers.Contract;

    before(async () => {
      vBNB = new ethers.Contract(vBNB_ADDRESS, vBNB_ABI, provider);
    });

    it("validate admin", async () => {
      expect(await vBNB.admin()).to.be.equal(CURRENT_ADMIN);
    });
  });

  testVip("VIP-152", vip152Testnet());

  describe("Post-VIP behavior", async () => {
    let vBNB: ethers.Contract;

    before(async () => {
      vBNB = new ethers.Contract(vBNB_ADDRESS, vBNB_ABI, provider);
    });

    it("validate admin", async () => {
      expect(await vBNB.admin()).to.be.equal(VBNBAdmin_ADDRESS);
    });
  });
});
