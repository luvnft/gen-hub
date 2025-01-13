import SkeletonImage from "@/components/skeleton/skeleton-image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  image: string;
  floor: string;
  volume: string;
  [key: string]: unknown;
}

const NftCard: React.FC<CardProps> = ({
  title,
  image,
  floor,
  volume,
  ...prop
}) => {
  return (
    <Link href={`/src/public`}>
      <div
        className="flex flex-col gap-3 rounded-xl bg-background pb-4 text-text shadow transition-colors dark:bg-gray-900 dark:text-text-dark"
        {...prop}
      >
        <SkeletonImage
          className="aspect-video rounded-lg rounded-t-xl object-cover"
          height="150px"
          src={image === "" ? "/default-image.jpg" : image}
        />
        <p className="px-4 text-xl font-bold">{title}</p>
        <div className="flex items-center justify-between px-4 font-bold">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">Floor</p>
            <p className="text-md font-medium">{floor}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">Volume</p>
            <p className="text-md font-medium">{volume}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NftCard;
