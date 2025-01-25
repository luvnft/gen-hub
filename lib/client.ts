import { createThirdwebClient, defineChain } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID

export const address_marketplace_contract =
  "0xcc85af4E1EFB3F8A378D20016020124917206E4b";
export const address_collection_contract =
  "0x3c15C3b89FfA36743F4aFD1da65369Ab02d4c39e";
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
const secretKey = process.env.TW_SECRET_KEY;

if (!clientId) throw new Error("No client ID provided");

// Base chain (assuming Ethereum mainnet)
export const BASE_CHAIN = defineChain({
  id: 1, // Ethereum mainnet chain ID
  name: "Ethereum Mainnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://base-mainnet.infura.io/v3/5c1f72b4e68044e6a3aa7a68ee3a4a19"], // Replace with your Infura key
    },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
    },
  },
});

// Polygon mainnet
export const POLYGON_MAINNET = defineChain({
  id: 137,
  name: "Polygon Mainnet",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Polygonscan",
      url: "https://polygonscan.com",
    },
  },
});

export const POLYGONSCAN_URL = "https://polygonscan.com";

export default createThirdwebClient(secretKey ? { secretKey } : { clientId });