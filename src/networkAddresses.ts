import bscmainnetGovernanceDeployedContracts from "@venusprotocol/governance-contracts/deployments/bscmainnet_addresses.json";
import bsctestnetGovernanceDeployedContracts from "@venusprotocol/governance-contracts/deployments/bsctestnet_addresses.json";
import ilBscmainnetDeployedContracts from "@venusprotocol/isolated-pools/deployments/bscmainnet_addresses.json";
import ilBsctestnetDeployedContracts from "@venusprotocol/isolated-pools/deployments/bsctestnet_addresses.json";
import bscmainnetOracleDeployedContracts from "@venusprotocol/oracle/deployments/bscmainnet_addresses.json";
import bsctestetOracleDeployedContracts from "@venusprotocol/oracle/deployments/bsctestnet_addresses.json";
import ethereumOracleDeployedContracts from "@venusprotocol/oracle/deployments/ethereum_addresses.json";
import bscmainnetDeployedContracts from "@venusprotocol/venus-protocol/deployments/bscmainnet_addresses.json";
import bsctestnetDeployedContracts from "@venusprotocol/venus-protocol/deployments/bsctestnet_addresses.json";
import sepoliaDeployedContracts from "@venusprotocol/venus-protocol/deployments/sepolia_addresses.json";
import { ethers } from "ethers";

export const ZERO_ADDRESS = ethers.constants.AddressZero;

export const NETWORK_ADDRESSES = {
  bscmainnet: {
    DEFAULT_PROPOSER_ADDRESS: "0x97a32D4506F6A35De68e0680859cDF41D077a9a9",
    GOVERNOR_PROXY: "0x2d56dC077072B53571b8252008C60e945108c75a",
    NORMAL_TIMELOCK: bscmainnetGovernanceDeployedContracts.addresses.NormalTimelock,
    ETH_CHAINLINK_FEED: "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e",
    USDT_CHAINLINK_FEED: "0xB97Ad0E74fa7d920791E90258A6E2085088b4320",
    CHAINLINK_ORACLE: "0x1B2103441A0A108daD8848D8F5d790e4D402921F",
    GENERIC_TEST_USER_ACCOUNT: "0xF977814e90dA44bFA03b6295A0616a897441aceC",
    XVS_VAULT_PROXY: bscmainnetDeployedContracts.addresses.XVSVaultProxy,
    XVS: bscmainnetDeployedContracts.addresses.XVS,
    VAI_UNITROLLER: bscmainnetDeployedContracts.addresses.VaiUnitroller,
    VAI_MINT_USER_ACCOUNT: "0x2DDd1c54B7d32C773484D23ad8CB4F0251d330Fc",
    UNITROLLER: bscmainnetDeployedContracts.addresses.Unitroller,
    VAI: bscmainnetDeployedContracts.addresses.VAI,
    VTREASURY: bscmainnetDeployedContracts.addresses.VTreasury,
    POOL_REGISTRY: ilBscmainnetDeployedContracts.addresses.PoolRegistry,
    BINANCE_ORACLE: bscmainnetOracleDeployedContracts.addresses.BinanceOracle,
    RESILIENT_ORACLE: bscmainnetOracleDeployedContracts.addresses.ResilientOracle,
  },
  bsctestnet: {
    DEFAULT_PROPOSER_ADDRESS: "0x2Ce1d0ffD7E869D9DF33e28552b12DdDed326706",
    GOVERNOR_PROXY: "0x5573422a1a59385c247ec3a66b93b7c08ec2f8f2",
    NORMAL_TIMELOCK: bsctestnetGovernanceDeployedContracts.addresses.NormalTimelock,
    ETH_CHAINLINK_FEED: "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7",
    USDT_CHAINLINK_FEED: "0xEca2605f0BCF2BA5966372C99837b1F182d3D620",
    CHAINLINK_ORACLE: "0xCeA29f1266e880A1482c06eD656cD08C148BaA32",
    COMPTROLLER_LENS: "0x350d56985A269C148648207E4Cea9f87656E762a",
    GENERIC_TEST_USER_ACCOUNT: "0x80dd0cB9c1EB88356bA5dd39161E391ACcF3FbCa",
    XVS_VAULT_PROXY: bsctestnetDeployedContracts.addresses.XVSVaultProxy,
    XVS: bsctestnetDeployedContracts.addresses.XVS,
    VAI_UNITROLLER: bsctestnetDeployedContracts.addresses.VaiUnitroller,
    VAI_MINT_USER_ACCOUNT: "0x6eACe20E1F89D0B24e5B295Af1802dfBc730B37D",
    UNITROLLER: bsctestnetDeployedContracts.addresses.Unitroller,
    VAI: bsctestnetDeployedContracts.addresses.VAI,
    VTREASURY: bsctestnetDeployedContracts.addresses.VTreasury,
    POOL_REGISTRY: ilBsctestnetDeployedContracts.addresses.PoolRegistry,
    BINANCE_ORACLE: bsctestetOracleDeployedContracts.addresses.BinanceOracle,
    RESILIENT_ORACLE: bsctestetOracleDeployedContracts.addresses.ResilientOracle,
  },
  ethereum: {
    NORMAL_TIMELOCK: "0x285960C5B22fD66A736C7136967A3eB15e93CC67",
    GUARDIAN: "0x285960C5B22fD66A736C7136967A3eB15e93CC67",
    VTREASURY: "0xfd9b071168bc27dbe16406ec3aba050ce8eb22fa",
    POOL_REGISTRY: "0x61CAff113CCaf05FFc6540302c37adcf077C5179",
    RESILIENT_ORACLE: "0xd2ce3fb018805ef92b8C5976cb31F84b4E295F94",
    XVS: "0xd3CC9d8f3689B83c91b7B59cAB4946B063EB894A",
    XVS_VAULT_PROXY: "0xA0882C2D5DF29233A092d2887A258C2b90e9b994",
    GENERIC_TEST_USER_ACCOUNT: "0x5a52E96BAcdaBb82fd05763E25335261B270Efcb",
    CHAINLINK_ORACLE: ethereumOracleDeployedContracts.addresses.ChainlinkOracle,
  },
  sepolia: {
    NORMAL_TIMELOCK: "0x94fa6078b6b8a26F0B6EDFFBE6501B22A10470fB", // Sepolia Multisig
    GUARDIAN: "0x94fa6078b6b8a26F0B6EDFFBE6501B22A10470fB",
    CHAINLINK_ORACLE: "0x102F0b714E5d321187A4b6E5993358448f7261cE",
    RESILIENT_ORACLE: "0x8000eca36201dddf5805Aa4BeFD73d1EB4D23264",
    BOUND_VALIDATOR: "0x60c4Aa92eEb6884a76b309Dd8B3731ad514d6f9B",
    ACM: "0xbf705C00578d43B6147ab4eaE04DBBEd1ccCdc96",
    MOCK_USDC: "0x772d68929655ce7234C8C94256526ddA66Ef641E",
    MOCK_USDT: "0x8d412FD0bc5d826615065B931171Eed10F5AF266",
    MOCK_WETH: "0x700868CAbb60e90d77B6588ce072d9859ec8E281",
    MOCK_WBTC: "0x92A2928f5634BEa89A195e7BeCF0f0FEEDAB885b",
    XVS: "0x66ebd019E86e0af5f228a0439EBB33f045CBe63E",
    POOL_REGISTRY: "0x758f5715d817e02857Ba40889251201A5aE3E186",
    COMPTROLLER_CORE: "0x7Aa39ab4BcA897F403425C9C6FDbd0f882Be0D70",
    VCRV_CORE: "0x121E3be152F283319310D807ed847E8b98319C1e",
    VCRVUSD_CORE: "0xA09cFAd2e138fe6d8FF62df803892cbCb79ED082",
    VUSDC_CORE: "0xF87bceab8DD37489015B426bA931e08A4D787616",
    VUSDT_CORE: "0x19252AFD0B2F539C400aEab7d460CBFbf74c17ff",
    VWBTC_CORE: "0x74E708A7F5486ed73CCCAe54B63e71B1988F1383",
    VWETH_CORE: "0xc2931B1fEa69b6D6dA65a50363A8D75d285e4da9",
    COMPTROLLER_STABLECOINS: "0x18eF8D2bee415b731C25662568dc1035001cEB2c",
    VCRVUSD_STABLECOINS: "0x9C5e7a3B4db931F07A6534f9e44100DDDc78c408",
    VUSDC_STABLECOINS: "0xD5f83FCbb4a62779D0B37b9E603CD19Ad84884F0",
    VUSDT_STABLECOINS: "0x93dff2053D4B08823d8B39F1dCdf8497f15200f4",
    COMPTROLLER_CURVE: "0xD298182D3ACb43e98e32757FF09C91F203e9E67E",
    VCRV_CURVE: "0x9Db62c5BBc6fb79416545FcCBDB2204099217b78",
    VCRVUSD_CURVE: "0xc7be132027e191636172798B933202E0f9CAD548",
    VTREASURY: sepoliaDeployedContracts.addresses.VTreasuryV8,
    REDSTONE_ORACLE: "0x4e6269Ef406B4CEE6e67BA5B5197c2FfD15099AE",
    MOCK_CRV: "0x2c78EF7eab67A6e0C9cAa6f2821929351bdDF3d3",
    MOCK_crvUSD: "0x36421d873abCa3E2bE6BB3c819C0CF26374F63b6",
    XVS_VAULT_PROXY: "0x1129f882eAa912aE6D4f6D445b2E2b1eCbA99fd5",
    GENERIC_TEST_USER_ACCOUNT: "0x2Ce1d0ffD7E869D9DF33e28552b12DdDed326706",
  },
  opbnbtestnet: {
    NORMAL_TIMELOCK: "0xb15f6EfEbC276A3b9805df81b5FB3D50C2A62BDf",
    GUARDIAN: "0xb15f6EfEbC276A3b9805df81b5FB3D50C2A62BDf",
    XVS: "0xc2931B1fEa69b6D6dA65a50363A8D75d285e4da9",
    XVS_VAULT_PROXY: "0xB14A0e72C5C202139F78963C9e89252c1ad16f01",
    GENERIC_TEST_USER_ACCOUNT: "0x2Ce1d0ffD7E869D9DF33e28552b12DdDed326706",
    POOL_REGISTRY: "0x560eA4e1cC42591E9f5F5D83Ad2fd65F30128951",
    RESILIENT_ORACLE: "0xEF4e53a9A4565ef243A2f0ee9a7fc2410E1aA623",
    VTREASURY: "0x3370915301E8a6A6baAe6f461af703e2498409F3",
    BINANCE_ORACLE: "0x496B6b03469472572C47bdB407d5549b244a74F2",
    vWBNB_CORE: "0xD36a31AcD3d901AeD998da6E24e848798378474e",
  },
  opbnbmainnet: {
    NORMAL_TIMELOCK: "0xC46796a21a3A9FAB6546aF3434F2eBfFd0604207",
    GUARDIAN: "0xC46796a21a3A9FAB6546aF3434F2eBfFd0604207",
    XVS: "0x3E2e61F1c075881F3fB8dd568043d8c221fd5c61",
    XVS_VAULT_PROXY: "0x7dc969122450749A8B0777c0e324522d67737988",
    GENERIC_TEST_USER_ACCOUNT: "0x5a52E96BAcdaBb82fd05763E25335261B270Efcb",
    POOL_REGISTRY: "0x345a030Ad22e2317ac52811AC41C1A63cfa13aEe",
    RESILIENT_ORACLE: "0x8f3618c4F0183e14A218782c116fb2438571dAC9",
    VTREASURY: "0xDDc9017F3073aa53a4A8535163b0bf7311F72C52",
    BINANCE_ORACLE: "0xB09EC9B628d04E1287216Aa3e2432291f50F9588",
  },
  arbitrumsepolia: {
    NORMAL_TIMELOCK: "0x1426A5Ae009c4443188DA8793751024E358A61C2", // arbitrumsepolia Multisig
    GUARDIAN: "0x1426A5Ae009c4443188DA8793751024E358A61C2",
  },
  arbitrumone: {
    NORMAL_TIMELOCK: "0x14e0E151b33f9802b3e75b621c1457afc44DcAA0", // arbitrumone Multisig
    GUARDIAN: "0x14e0E151b33f9802b3e75b621c1457afc44DcAA0",
  },
};
