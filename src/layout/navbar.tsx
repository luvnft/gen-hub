"use client";

import ThemeSwitcher from "@/components/theme/theme-switcher";
import Sidebar from "@/components/ui/sidebar";
import SkeletonImage from "@/components/ui/skeleton-image";
import useToggle from "@/hooks/use-state-toggle";
import { client } from "@/lib/client";
import { ArrowRight, Menu, Plus, User2Icon } from "lucide-react";
import Link from "next/link";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

const Navbar = () => {
  const sidebar = useToggle();
  const account = useActiveAccount();

  return (
    <>
      <div className="fixed z-50 h-[66px] w-full border-b border-border bg-background px-5 py-4 text-text transition-colors duration-300 ease-out dark:border-border-dark dark:bg-background-dark dark:text-text-dark">
        <div className="container flex w-full items-center justify-between">
          <Link href="/">
            <SkeletonImage
              src="/logo.png"
              width="35px"
              height="35px"
              className="aspect-square rounded-full"
              isPriority
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="sr-only">
              <ConnectButton client={client} />
            </div>
            <div
              className="group relative flex h-[35px] w-10 cursor-pointer items-center justify-center rounded-lg border border-nav bg-nav transition-colors ease-out hover:border-sky-500 dark:border-nav-dark dark:bg-nav-dark dark:hover:border-sky-500"
              onClick={sidebar.toggle}
            >
              <span className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 filter transition-all duration-300 ease-out group-hover:blur-[8px]" />
              <span className="relative">
                <Menu size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close}>
        <div className="flex w-full flex-col">
          {[
            {
              title: "Actions",
              content: (
                <div
                  className="flex items-center gap-3.5 pl-6 transition-colors hover:bg-border dark:hover:bg-border-dark"
                  onClick={sidebar.close}
                >
                  <ThemeSwitcher />
                </div>
              ),
            },
            {
              title: "Navigation",
              content: (
                <>
                  <div
                    className="flex items-center pl-6 transition-colors hover:bg-border dark:hover:bg-border-dark"
                    onClick={sidebar.close}
                  >
                    <Link
                      href="/"
                      className="w-full p-2.5 pl-0 transition-all ease-out hover:pl-2"
                    >
                      <div className="flex items-center gap-2.5 text-link">
                        <ArrowRight size={22} strokeWidth={1} />
                        <p>Home</p>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="flex items-center pl-6 transition-colors hover:bg-border dark:hover:bg-border-dark"
                    onClick={sidebar.close}
                  >
                    <Link
                      href="/buy"
                      className="w-full p-2.5 pl-0 transition-all ease-out hover:pl-2"
                    >
                      <div className="flex items-center gap-2.5 text-link">
                        <ArrowRight size={22} strokeWidth={1} />
                        <p>Buy NFT</p>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="flex items-center pl-6 transition-colors hover:bg-border dark:hover:bg-border-dark"
                    onClick={sidebar.close}
                  >
                    <Link
                      href="/sell"
                      className="w-full p-2.5 pl-0 transition-all ease-out hover:pl-2"
                    >
                      <div className="flex items-center gap-2.5 text-link">
                        <ArrowRight size={22} strokeWidth={1} />
                        <p>Sell NFT</p>
                      </div>
                    </Link>
                  </div>
                </>
              ),
            },
            {
              title: "Account",
              content: (
                <>
                  {account ? (
                    <>
                      <div
                        className="flex items-center pl-6 transition-colors hover:bg-border dark:hover:bg-border-dark"
                        onClick={sidebar.close}
                      >
                        <Link
                          href="/profile"
                          className="w-full p-2.5 pl-0 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <User2Icon size={22} strokeWidth={1} />
                            <p>Profile</p>
                          </div>
                        </Link>
                      </div>
                      <div
                        className="flex items-center pl-6 transition-colors hover:bg-border dark:hover:bg-border-dark"
                        onClick={sidebar.close}
                      >
                        <Link
                          href="/create"
                          className="w-full p-2.5 pl-0 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <Plus size={22} strokeWidth={1} />
                            <p>Create</p>
                          </div>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="p-2.5 pl-6">Login to continue</p>
                  )}
                </>
              ),
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col">
              <p className="bg-bluebg p-2.5 pl-6 text-sm text-textSecondary dark:bg-bluebg-dark dark:text-textSecondary-dark">
                {section.title}
              </p>
              {section.content}
            </div>
          ))}
        </div>
      </Sidebar>
    </>
  );
};
export default Navbar;
