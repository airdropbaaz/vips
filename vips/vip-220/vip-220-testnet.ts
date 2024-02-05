import { parseUnits } from "ethers/lib/utils";

import { ProposalType } from "../../src/types";
import { makeProposal } from "../../src/utils";

const VBUSD = "0x08e0A5575De71037aE36AbfAfb516595fE68e5e4";
const COMPTROLLER = "0x94d1820b2D1c7c7452A163983Dc888CEC546b77D";
const NEW_COLLATERAL_FACTOR = parseUnits("0.72", 18);

export const vip220Testnet = () => {
  const meta = {
    version: "v2",
    title: "VIP-220 Risk Parameters Adjustments (BUSD)",
    description: `This VIP will perform the following Risk Parameter actions as per Chaos Labs’ latest recommendations in this Venus community forum publication: [Risk Parameter Updates 12/06/2023](https://community.venus.io/t/chaos-labs-risk-parameter-updates-12-06-23/3958).

- [BUSD (Core pool)](https://bscscan.com/address/0x95c78222B3D6e262426483D42CfA53685A67Ab9D)
    - Reduce collateral factor, from 0.825 to 0.72

Complete analysis and details of these recommendations are available in the above publication.

VIP simulation: https://github.com/VenusProtocol/vips/pull/134`,
    forDescription: "I agree that Venus Protocol should proceed with this proposal",
    againstDescription: "I do not think that Venus Protocol should proceed with this proposal",
    abstainDescription: "I am indifferent to whether Venus Protocol proceeds or not",
  };

  return makeProposal(
    [
      {
        target: COMPTROLLER,
        signature: "_setCollateralFactor(address,uint256)",
        params: [VBUSD, NEW_COLLATERAL_FACTOR],
      },
    ],
    meta,
    ProposalType.REGULAR,
  );
};
