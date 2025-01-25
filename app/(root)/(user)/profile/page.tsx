"use client";

import MenuSection from "@/components/ui/menu-section";
import client, { BASE_CHAIN, POLYGON_MAINNET } from "@/lib/client"; // Import BASE_CHAIN and POLYGON_MAINNET
import "@/styles/profile.module.scss";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaCamera, FaCopy, FaEthereum } from "react-icons/fa";
import { Blobbie, useActiveAccount, useWalletBalance } from "thirdweb/react";
import CollectedPage from "@/app/(root)/(user)/profile/collection";
import BackButton from "@/components/common/back-button";

const ProfilePage: React.FC = () => {
  const account = useActiveAccount();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: balance, isLoading: isLoading } = useWalletBalance({
    client: client,
    chain: account?.preferredChain || POLYGON_MAINNET, // Use POLYGON_MAINNET by default
    address: account?.address,
  });

  // ... rest of the code ...

  return (
    <div>
      {/* ... rest of the code ... */}
    </div>
  );
};

export default ProfilePage;