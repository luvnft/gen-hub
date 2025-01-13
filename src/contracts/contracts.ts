import { client, POLYGON_ZKEVM_CARDONA_TESTNET } from "@/lib/client";
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

export const MARKETPLACE = getContract({
  client,
  chain: POLYGON_ZKEVM_CARDONA_TESTNET,
  address: CONTRACT_MARKET_ADDRESS,
});

export const NFT_COLLECTION = getContract({
  client,
  chain: POLYGON_ZKEVM_CARDONA_TESTNET,
  address: NFT_COLLECTION_ADDRESS,
});

// (Optional) Set up the URL of where users can view transactions on
export const POLYGONSCAN_URL = "https://cardona-zkevm.polygonscan.com";
