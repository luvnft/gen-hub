"use client";

import { useDisconnect, useActiveWallet } from "thirdweb/react";

const DisconnectButton = () => {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <button onClick={() => disconnect(wallet)}>Disconnect</button>;
};

export default DisconnectButton;
