import { client, NETWORK } from "@/lib/client";
import { getContract } from "thirdweb";
/** Replace the values below with the addresses of your smart contracts. */
// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CONTRACT_MARKET_ADDRESS: string =
  process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const NFT_COLLECTION_ADDRESS: string =
  process.env.NEXT_PUBLIC_COLLECTION_CONTRACT_ADDRESS;

export const MarkerPlace = getContract({
  client,
  chain: NETWORK,
  address: CONTRACT_MARKET_ADDRESS,
});

export const NFT_COLLECTION = getContract({
  address: NFT_COLLECTION_ADDRESS,
  client,
  chain: NETWORK,
});

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://cardona-zkevm.polygonscan.com";
