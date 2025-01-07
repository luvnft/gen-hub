"use client";

import { useActiveWallet, useDisconnect } from "thirdweb/react";
import { toast } from "sonner";
import { ThirdwebButtonProps } from "@/type/type";
import React from "react";

const DisconnectButton: React.FC<ThirdwebButtonProps> = ({ type = "text" }) => {
  const { disconnect } = useDisconnect();
  const account = useActiveWallet();
  const wallet = useActiveWallet();

  const handleDisconnect = async () => {
    if (account) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      disconnect(wallet);
      toast.success("Disconnected from wallet");
    } else toast.error("No wallet connected");
  };

  return (
    <>
      {type == "text" ? (
        <button onClick={handleDisconnect}>Disconnect</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default DisconnectButton;
