"use client";

import { useActiveWallet, useNetworkSwitcherModal } from "thirdweb/react";
import { ethereum, sepolia } from "thirdweb/chains";
import { client } from "@/lib/client";
import { toast } from "sonner";
import React from "react";
import { ThirdwebButtonProps } from "@/type/type";

const NetworkSwitcher: React.FC<ThirdwebButtonProps> = ({ type = "text" }) => {
  const networkSwitcher = useNetworkSwitcherModal();
  const account = useActiveWallet();

  function handleClick() {
    if (!account) {
      toast.error("No wallet connected");
      return;
    }

    networkSwitcher
      .open({
        client,
        theme: "dark",
        sections: [
          {
            label: "Popular",
            chains: [ethereum, sepolia],
          },
        ],
      })
      .then((r) => console.log("switched to", r));
  }

  return (
    <>
      {type === "text" ? (
        <button onClick={handleClick}>Switch Network</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default NetworkSwitcher;
