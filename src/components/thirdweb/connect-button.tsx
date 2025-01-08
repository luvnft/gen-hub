"use client";

import { client } from "@/lib/client";
import { useConnectModal } from "thirdweb/react";
import { toast } from "sonner";
import React from "react";
import { ThirdwebButtonProps } from "@/type/type";

const ConnectButton: React.FC<ThirdwebButtonProps> = ({ type = "text" }) => {
  const { connect } = useConnectModal();

  const handleConnect = async () => {
    const wallet = await connect({
      client,
      appMetadata: {
        name: "Generative Hub App",
        url: "https://generative-hub-app.vercel.app/",
        description: "Generative Hub App: Powered by Forma NFTs",
        logoUrl:
          "https://github.com/Axyl1410/Generative-Hub-App/blob/main/src/public/logo.png",
      },
      showThirdwebBranding: false,
    }); // opens the connect modal
    console.log("connected to", wallet);
    toast.success("Connected to wallet");
  };

  return (
    <>
      {type === "text" ? (
        <button onClick={handleConnect}>Connect</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConnectButton;
