"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SkeletonImageProps {
  src: string;
  height?: string;
  width?: string;
  className?: string;
}

export default function SkeletonImage({
  src,
  height = "16rem",
  width = "100%",
  className = "",
}: SkeletonImageProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    if (!imageLoading) {
      const timer = setTimeout(() => setPulsing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [imageLoading]);

  const imageLoaded = () => {
    setImageLoading(false);
  };

  return (
    <div
      className={cn(
        `overflow-hidden bg-[#ccc] shadow-md`,
        pulsing ? "animate-pulse" : "",
        className,
        `w-[${width}] h-[${height}]`,
      )}
    >
      <motion.div
        initial={{ height: "0px", opacity: 0 }}
        animate={{
          height: imageLoading ? height : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
      >
        <Image
          alt=""
          onLoad={imageLoaded}
          src={src.trimStart()}
          fill
          className={cn("static block object-cover", className)}
        />
      </motion.div>
    </div>
  );
}
