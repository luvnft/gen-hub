"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";
import useToggle from "@/hooks/use-state-toggle";
import SkeletonImage from "@/components/ui/skeleton-image";
import ConnectButton from "@/components/thirdweb/connect-button";
import Dialog from "@/components/ui/dialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  const account = useActiveAccount();
  const modal = useToggle();

  useEffect(() => {
    if (account) modal.close();
    else modal.open();
  }, [account, modal]);

  return (
    <>
      {children}
      <Dialog
        isOpen={modal.isOpen}
        onClose={() => {
          if (!account) redirect("/");
          else modal.close();
        }}
      >
        <div className="flex flex-col gap-2">
          <div className="grid w-full place-items-center">
            <div className="h-[50px] w-[50px]">
              <SkeletonImage
                src={"/logo.png"}
                height={"50px"}
                width={"50px"}
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold">Connect Wallet</h1>
          <p>Please connect your wallet to continue.</p>
          <ConnectButton className="bg-border" />
        </div>
      </Dialog>
    </>
  );
}
