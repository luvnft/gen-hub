"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const account = useActiveAccount();

  useEffect(() => {
    if (!account) redirect("/");
  }, [account]);

  return <>{children}</>;
}
