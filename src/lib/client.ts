import { createThirdwebClient, defineChain, getContract } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const address_contract: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_API;

if (!clientId) throw new Error("No client ID provided");
if (!address_contract) throw new Error("No contract address provided");

export const client = createThirdwebClient({
  clientId: clientId,
});

export const contract = getContract({
  client,
  chain: defineChain(2442),
  address: address_contract,
});
