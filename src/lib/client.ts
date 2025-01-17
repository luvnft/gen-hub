import { createThirdwebClient, defineChain } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID

export const address_marketplace_contract =
  process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS;
export const address_collection_contract =
  process.env.NEXT_PUBLIC_COLLECTION_CONTRACT_ADDRESS;
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_API;
const secretKey = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_SECRET;

if (!clientId) throw new Error("No client ID provided");
if (!address_marketplace_contract)
  throw new Error("No contract address provided");
if (!address_collection_contract)
  throw new Error("No contract address provided");
if (!secretKey) throw new Error("No secret key provided");

export const POLYGON_ZKEVM_CARDONA_TESTNET = defineChain({
  id: 2442,
  name: "Polygon zkEVM Cardona Testnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.cardona.zkevm-rpc.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://cardona-zkevm.polygonscan.com",
    },
  },
  testnet: true,
});

export default createThirdwebClient(secretKey ? { secretKey } : { clientId });
