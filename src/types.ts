import { BigNumberish } from "ethers";

export type SUPPORTED_NETWORKS = "bsctestnet" | "bscmainnet" | "sepolia" | "ethereum" | "opbnbtestnet" | "opbnbmainnet";

export interface ProposalMeta {
  version: string;
  title: string;
  description: string;
  forDescription: string;
  againstDescription: string;
  abstainDescription: string;
}

export enum ProposalType {
  REGULAR = 0,
  FAST_TRACK = 1,
  CRITICAL = 2,
}

export interface Proposal {
  targets: string[];
  values: BigNumberish[];
  signatures: string[];
  params: any[][];
  meta?: ProposalMeta;
  type?: ProposalType;
}

export interface Command {
  target: string;
  signature: string;
  params: any[];
  value?: string;
}

export interface TokenConfig {
  asset: string;
  oracles: string[];
  enableFlagsForOracles: boolean[];
}
