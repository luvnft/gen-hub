"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface BackButtonProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

const BackButton: React.FC<BackButtonProps> = ({ children, ...props }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} {...props}>
      {children}
    </button>
  );
};

export default BackButton;
