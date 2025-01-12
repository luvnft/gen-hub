"use client";

import { client } from "@/lib/client";
import { useConnectModal } from "thirdweb/react";
import { toast } from "sonner";
import React from "react";
import { ThirdwebButtonProps } from "@/type/type";
import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const ConnectButton: React.FC<ThirdwebButtonProps> = ({
  type = "text",
  className,
  ...props
}) => {
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
      welcomeScreen: {
        title: "Generative Hub App",
        subtitle: "Generative Hub App: Powered by Forma NFTs",
      },
    }); // opens the connect modal
    console.log("connected to", wallet);
    toast.success("Connected to wallet");
  };

  return (
    <>
      {type === "text" ? (
        <div
          className={cn(
            "flex cursor-pointer items-center transition-colors hover:bg-border dark:hover:bg-border-dark",
            className
          )}
          onClick={handleConnect}
          {...props}
        >
          <div className="w-full p-2.5 transition-colors">
            <div className="flex items-center gap-2.5">
              <Wallet size={22} strokeWidth={1} />
              <p>Connect</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConnectButton;
