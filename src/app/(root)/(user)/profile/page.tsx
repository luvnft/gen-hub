"use client";

import { Blobbie, useActiveAccount, useWalletBalance } from "thirdweb/react";
import Loading from "@/components/common/loading";
import client, { POLYGON_ZKEVM_CARDONA_TESTNET } from "@/lib/client";
import { AccountProvider, AccountBalance } from "thirdweb/react";

export default function Page() {
  // This is the chain your dApp will work on.
  // Change this to the chain your app is built for.
  // You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

  const account = useActiveAccount();

  const { data: balance, isLoading } = useWalletBalance({
    client: client,
    chain: POLYGON_ZKEVM_CARDONA_TESTNET,
    address: account?.address,
  });

  return (
    <>
      <div className="break-words">
        Wallet address: {!account?.address ? <Loading /> : account?.address}
      </div>
      <div>
        Wallet balance:
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {balance?.displayValue} {balance?.symbol}
          </>
        )}
      </div>
      <Blobbie address={`${account?.address}`} className="h-10 w-10" />
      <AccountProvider address={`${account?.address}`} client={client}>
        <AccountBalance
          chain={POLYGON_ZKEVM_CARDONA_TESTNET}
          loadingComponent={<Loading />}
        />
      </AccountProvider>
    </>
  );
}
