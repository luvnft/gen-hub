import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AccountBalanceInfo } from "thirdweb/react";
import { formatNumber } from "thirdweb/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const format = (props: AccountBalanceInfo): string => {
  return `${formatNumber(props.balance, 1)} ${props.symbol.toLowerCase()}`;
};
