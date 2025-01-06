"use client";

import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [files, setFiles] = useState<File>();
  const handleFileUpload = (files: File) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-5xl flex-col gap-4">
        <h1 className="text-3xl font-bold">Create an NFT</h1>
        <p className="text-xl font-bold">
          Once your item is minted you will not be able to change any of its
          information.
        </p>
        <div className="mx-auto w-full max-w-5xl gap-4 rounded-lg border border-dashed border-border bg-white dark:border-neutral-800 dark:bg-black">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}
