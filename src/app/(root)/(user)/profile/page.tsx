"use client";

import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import Loading from "@/components/common/loading";
import NftCard from "@/components/nft/nft-card";
import { client, POLYGON_ZKEVM_CARDONA_TESTNET } from "@/lib/client";

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
          <p>
            {balance?.displayValue} {balance?.symbol}
          </p>
        )}
      </div>
      <div className="grid gap-4 pt-8 sm:grid-cols-5">
        <NftCard title={"bla bla"} image={""} floor={"a"} volume={"b"} />
      </div>
    </>
  );
}
