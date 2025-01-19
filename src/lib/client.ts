import { createThirdwebClient, defineChain } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID

export const address_marketplace_contract =
  "0xa60616B4570460e17b774f10e09069F9De6869d4";
export const address_collection_contract =
  "0x6B76De4C44E51154f4ed0E6720b81157220582A8";
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
const secretKey = process.env.TW_SECRET_KEY;

if (!clientId) throw new Error("No client ID provided");

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
