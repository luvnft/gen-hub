"use client";

import { client } from "@/lib/client";
import { useConnectModal } from "thirdweb/react";

const ConnectButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { connect, isConnecting } = useConnectModal();

  async function handleConnect() {
    const wallet = await connect({ client }); // opens the connect modal
    console.log("connected to", wallet);
  }

  return <button onClick={handleConnect}> Connect in </button>;
};

export default ConnectButton;
