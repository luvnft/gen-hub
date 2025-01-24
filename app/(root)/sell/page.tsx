"use client";

import SaleInfo from "@/components/sale-info";
import { NFT_COLLECTION } from "@/contracts";
import client from "@/lib/client";
import { useState } from "react";
import { NFT as NFTType } from "thirdweb";
import {
  getNFTs as getNFTs721,
  tokensOfOwner,
} from "thirdweb/extensions/erc721";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import BackButton from "@/components/common/back-button";

export const dynamic = "force-dynamic";

export default function Sell() {
  const [loading, setLoading] = useState<boolean>(false);
  const [ownedTokenIds, setOwnedTokenIds] = useState<readonly bigint[]>([]);
  const [selectedNft, setSelectedNft] = useState<NFTType>();

  const account = useActiveAccount();
  // useEffect(() => {
  //   if (account) {
  //     setLoading(true);
  //     tokensOfOwner({
  //       contract: NFT_COLLECTION,
  //       owner: account.address,
  //     })
  //       .then((tokens) => {
  //         setOwnedTokenIds(tokens);
  //         console.log("hello", tokens);
  //       })
  //       .catch((err) => {
  //         // Log the full error object for debugging
  //         console.error("Error fetching NFTs:", err);
  //
  //         // Display a user-friendly error message
  //         toast.error("Something went wrong while fetching your NFTs!");
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }
  // }, [account]);

  const { data: allNFTs } = useReadContract(getNFTs721, {
    contract: NFT_COLLECTION,
    includeOwners: true,
  });

  const { data: ownedNFTs } = useReadContract(tokensOfOwner, {
    contract: NFT_COLLECTION,
    owner: "0x2349Db8bdf85bd80bFc4afb715a69fb4C6463B96",
  });

  console.log("1", allNFTs);
  console.log("2", ownedNFTs);

  return (
    <div className={"mt-10"}>
      <div className={"flex w-full items-center justify-between"}>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Sell NFTs
        </h1>
        <BackButton className={"h-fit"} />
      </div>

      <div className="my-8">
        {!selectedNft ? (
          <div className={"grid grid-cols-4 gap-4"}>
            {allNFTs && allNFTs.length > 0 ? (
              allNFTs.map((item) => (
                <div
                  onClick={() => setSelectedNft(item)}
                  key={item.id}
                  // href={`/collection/${nftContract.chain.id}/${nftContract.address}/token/${item.id.toString()}`}
                  className="block cursor-pointer rounded-lg p-4 hover:no-underline"
                >
                  <div className="flex flex-col">
                    <MediaRenderer client={client} src={item.metadata.image} />
                    <p className="mt-2 text-center">
                      {item.metadata?.name ?? "Unknown item"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="mx-auto text-center">Loading...</div>
            )}
          </div>
        ) : (
          <div className="mt-0 flex max-w-full gap-8">
            <div className="flex w-full flex-col">
              <div>
                <MediaRenderer
                  client={client}
                  src={selectedNft.metadata.image}
                  className="!h-auto !w-full rounded-lg bg-white/[.04]"
                />
              </div>
            </div>

            <div className="relative top-0 w-full max-w-full">
              <h1 className="mb-1 break-words text-3xl font-semibold">
                {selectedNft.metadata.name}
              </h1>
              <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                #{selectedNft.id.toString()}
              </p>
              <p className="text-text dark:text-white/60">
                You&rsquo;re about to list the following item for sale.
              </p>

              <div className="relative flex flex-1 flex-col overflow-hidden rounded-lg bg-transparent py-4">
                <SaleInfo nft={selectedNft} />
              </div>
              <div
                className={
                  "flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-200 py-3 text-sm text-black"
                }
                onClick={() => {
                  setSelectedNft(undefined);
                }}
              >
                Cancel
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
