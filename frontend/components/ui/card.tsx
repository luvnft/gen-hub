import React from "react";
import SkeletonImage from "@/components/ui/skeleton-image";
import Link from "next/link";
import { CardProps } from "@/type/type";

const Card: React.FC<CardProps> = ({
  title,
  image,
  floor,
  volume,
  ...prop
}) => {
  return (
    <Link href={`/`}>
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
            <p className="text-md font-medium hover:underline">{floor}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">Volume</p>
            <p className="text-md font-medium hover:underline">{volume}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
