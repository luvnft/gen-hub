import client, {
  address_collection_contract,
  address_marketplace_contract,
  BASE_CHAIN, 
  POLYGON_MAINNET,
} from "@/lib/client";
import { getContract } from "thirdweb";

/** Replace the values below with the addresses of your smart contracts. */
// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.

export const MARKETPLACE = getContract({
  client,
  chain: BASE_CHAIN, // Use BASE_CHAIN for Base
  address: address_marketplace_contract,
});

export const NFT_COLLECTION = getContract({
  client,
  chain: POLYGON_MAINNET, // Use POLYGON_MAINNET for Polygon
  address: address_collection_contract,
});