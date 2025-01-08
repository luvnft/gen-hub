import React from "react";

export interface CardProps {
  title: string;
  image: string;
  floor: string;
  volume: string;
  [key: string]: unknown;
}

export type ThirdwebButtonProps = {
  type?: "icon" | "text";
};

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
