"use client";

import { client } from "@/lib/client";
import { useConnectModal } from "thirdweb/react";
import { toast } from "sonner";
import React from "react";
import { ThirdwebButtonProps } from "@/type/type";

const ConnectButton: React.FC<ThirdwebButtonProps> = ({ type = "text" }) => {
  const { connect } = useConnectModal();

  const handleConnect = async () => {
    const wallet = await connect({ client }); // opens the connect modal
    console.log("connected to", wallet);
    toast.success("Connected to wallet");
  };

  return (
    <>
      {type == "text" ? (
        <button onClick={handleConnect}>Connect</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConnectButton;
