import { parseUnits } from "ethers/lib/utils";

import { ProposalType } from "../../src/types";
import { makeProposal } from "../../src/utils";

export const COMPTROLLER = "0xfD36E2c2a6789Db23113685031d7F16329158384";
export const vTUSD = "0xBf762cd5991cA1DCdDaC9ae5C638F5B5Dc3Bee6E";
export const RESERVE_FACTOR = parseUnits("0.1", 18).toString();
export const COLLATERAL_FACTOR = parseUnits("0.75", 18).toString();
export const BORROW_CAP = parseUnits("1200000", 18).toString();
export const SUPPLY_CAP = parseUnits("1500000", 18).toString();
export const vFDUSD = "0xC4eF4229FEc74Ccfe17B2bdeF7715fAC740BA0ba";
export const FD_USD_BORROW_CAP = parseUnits("16000000", 18).toString();
export const FD_USD_SUPPLY_CAP = parseUnits("20000000", 18).toString();

export const Actions = {
  MINT: 0,
  BORROW: 2,
  ENTER_MARKET: 7,
};

export const vip268 = () => {
  const meta = {
    version: "v2",
    title: "VIP-268 Enable TUSD Market",
    description: ``,
    forDescription: "I agree that Venus Protocol should proceed with this proposal",
    againstDescription: "I do not think that Venus Protocol should proceed with this proposal",
    abstainDescription: "I am indifferent to whether Venus Protocol proceeds or not",
  };

  return makeProposal(
    [
      {
        target: COMPTROLLER,
        signature: "_setActionsPaused(address[],uint8[],bool)",
        params: [[vTUSD], [Actions.MINT, Actions.BORROW, Actions.ENTER_MARKET], false],
      },
      {
        target: vTUSD,
        signature: "_setReserveFactor(uint256)",
        params: [RESERVE_FACTOR],
      },
      {
        target: COMPTROLLER,
        signature: "_setCollateralFactor(address,uint256)",
        params: [vTUSD, COLLATERAL_FACTOR],
      },
      {
        target: COMPTROLLER,
        signature: "_setMarketBorrowCaps(address[],uint256[])",
        params: [
          [vTUSD, vFDUSD],
          [BORROW_CAP, FD_USD_BORROW_CAP],
        ],
      },
      {
        target: COMPTROLLER,
        signature: "_setMarketSupplyCaps(address[],uint256[])",
        params: [
          [vTUSD, vFDUSD],
          [SUPPLY_CAP, FD_USD_SUPPLY_CAP],
        ],
      },
    ],
    meta,
    ProposalType.FAST_TRACK,
  );
};

export default vip268;
