export const dynamic = "force-dynamic";
export const revalidate = 0;
import React from "react";
import { MediaRenderer } from "thirdweb/react";
import {
  getAllValidListings,
  getAllValidAuctions,
} from "thirdweb/extensions/marketplace";
import { MARKETPLACE, NFT_COLLECTION } from "@/contracts/contracts";
import randomColor from "@/lib/utils";
import { getNFT } from "thirdweb/extensions/erc721";
import client from "@/lib/client";
import BuyListingButton from "@/components/token/buy-listing-button";
import MakeOfferButton from "@/components/token/make-offer-button";
import Events from "@/components/token/events";

const [randomColor1, randomColor2] = [randomColor(), randomColor()];

export default async function TokenPage({
  params,
}: {
  params: { contractAddress: string; tokenId: string };
}) {
  const listingsPromise = getAllValidListings({
    contract: MARKETPLACE,
  });
  const auctionsPromise = getAllValidAuctions({
    contract: MARKETPLACE,
  });
  const nftPromise = getNFT({
    contract: NFT_COLLECTION,
    tokenId: BigInt(params.tokenId),
    includeOwner: true,
  });

  const [listings, auctions, nft] = await Promise.all([
    listingsPromise,
    auctionsPromise,
    nftPromise,
  ]);

  const directListing = listings?.find(
    (l) =>
      l.assetContractAddress === params.contractAddress &&
      l.tokenId === BigInt(params.tokenId)
  );

  const auctionListing = auctions?.find(
    (a) =>
      a.assetContractAddress === params.contractAddress &&
      a.tokenId === BigInt(params.tokenId)
  );

  return (
    <div className="mx-auto mt-32 flex max-w-2xl flex-col gap-16 lg:max-w-full lg:flex-row">
      <div className="flex flex-1 flex-col">
        <MediaRenderer
          src={nft.metadata.image}
          client={client}
          className="!w-full rounded-lg bg-white/[.04]"
        />
        <div className="my-4 flex items-center justify-between">
          <div>
            <h1 className="mx-4 hyphens-auto break-words text-3xl font-semibold">
              {nft.metadata.name}
            </h1>
            <p className="mx-4 overflow-hidden text-ellipsis whitespace-nowrap">
              #{nft.id.toString()}
            </p>
          </div>

          <div className="flex cursor-pointer items-center gap-4 transition-all hover:opacity-80">
            <div
              className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 opacity-90"
              style={{
                background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
              }}
            />
            {nft.owner && (
              <div className="flex flex-col">
                <p className="text-white/60">Current Owner</p>
                <p className="font-medium text-white/90">
                  {nft.owner.slice(0, 8)}...
                  {nft.owner.slice(-4)}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="px-4">
          <h3 className="mt-8">History</h3>
          <Events tokenId={nft.id} />
        </div>
      </div>

      <div className="sticky w-full min-w-[370px] flex-shrink lg:max-w-[450px]">
        <div className="relative mb-6 flex w-full grow flex-col overflow-hidden rounded-lg bg-transparent">
          {/* Pricing information */}
          <div className="w-full rounded-lg bg-white/[.04] p-4">
            <p className="mb-1 text-white/60">Price</p>
            <div className="rounded-md text-lg font-medium text-white/90">
              {directListing ? (
                <>
                  {directListing?.currencyValuePerToken.displayValue}
                  {" " + directListing?.currencyValuePerToken.symbol}
                </>
              ) : auctionListing ? (
                <>
                  {auctionListing?.buyoutCurrencyValue.displayValue}
                  {" " + auctionListing?.buyoutCurrencyValue.symbol}
                </>
              ) : (
                "Not for sale"
              )}
            </div>
            <div>
              {auctionListing && (
                <>
                  <p
                    className="mb-4 text-white/60"
                    style={{
                      marginTop: 12,
                    }}
                  >
                    Bids starting from
                  </p>

                  <div className="font-lg rounded-md font-medium text-white/90">
                    {auctionListing?.minimumBidCurrencyValue.displayValue}
                    {" " + auctionListing?.minimumBidCurrencyValue.symbol}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <BuyListingButton
            directListing={directListing}
            auctionListing={auctionListing}
          />

          <div className="my-4 flex w-full justify-center text-center">
            <p className="text-white/60">or</p>
          </div>
          <MakeOfferButton
            auctionListing={auctionListing}
            directListing={directListing}
          />
        </div>
      </div>
    </div>
  );
}
