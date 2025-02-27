import ScrollToTop from "@/components/common/scroll-to-top";
import { ThemeProvider } from "@/components/theme/theme-context";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { ThirdwebProvider } from "thirdweb/react";
import "../styles/globals.scss";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Generative Hub App",
  description: "Generative Hub App: Powered by Forma NFTs",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "production") console.log = () => {};

  return (
    <html lang="en">
      <body
        className={`bg-background text-text antialiased transition-colors duration-300 ease-out dark:bg-background-dark dark:text-text-dark`}
      >
        <ThemeProvider>
          <ScrollToTop />
          <Toaster closeButton richColors position="top-left" />
          <NextUIProvider>
            <ThirdwebProvider>{children}</ThirdwebProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
