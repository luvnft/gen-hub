'use client'

import { client } from "@/lib/client";
import { useActiveAccount, useWalletBalance } from "thirdweb/react";

export default function App() {

  // console.log(client)
  // This is the chain your dApp will work on.
  // Change this to the chain your app is built for.
  // You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
  const customChain = {
    // Required information for connecting to the network
    id: 2125031, // Chain ID of the network
    chainId: 2125031, // Chain ID of the network
    rpc: "https://bubs-sepolia.rpc.caldera.xyz/http", // RPC URL to use

    // Information for adding the network to your wallet (how it will appear for first time users) === \\
    // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
    nativeCurrency: {
      decimals: 18,
      name: "Bubs Sepolia",
      symbol: "ETH",
    },
    shortName: "Bubs", // Display value shown in the wallet UI
    slug: "Bubs", // Display value shown in the wallet UI
    testnet: true as const, // Boolean indicating whether the chain is a testnet or mainnet
    chain: "Bubs", // Name of the network
    name: "Bubs Sepolia", // Name of the network
  };

  const account = useActiveAccount();
  // const { data: balance, isLoading } = useWalletBalance({
  //   client : client,
  //   chain: customChain,
  //   address: account?.address,
  // });

  return (
    <div>
      <p>Wallet address: {account?.address}</p>
      {/* <p>
        Wallet balance: {balance?.displayValue} {balance?.symbol}
      </p> */}
    </div>
  );
}
