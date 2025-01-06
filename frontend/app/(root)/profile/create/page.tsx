"use client";

import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import ButtonGradiant from "@/components/ui/button-gradiant";

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
        <h1 className="text-xl font-bold sm:text-3xl">Create an NFT</h1>
        <p className="text-md font-bold sm:text-xl">
          Once your item is minted you will not be able to change any of its
          information.
        </p>
        <div className="mx-auto w-full max-w-5xl gap-4 rounded-lg border border-dashed border-border bg-white dark:border-neutral-800 dark:bg-black">
          <FileUpload onChange={handleFileUpload} />
        </div>
        <form className="flex flex-col gap-4">
          <div className="sm:col-span-1">
            <label
              htmlFor="title"
              className="block text-sm/6 font-medium dark:text-text-dark"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name your NFT"
                className="block w-full rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-background-dark sm:text-sm/6"
                required
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm/6 font-medium text-gray-900 dark:text-text-dark"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                id="description"
                rows={3}
                className="block w-full rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-background-dark sm:text-sm/6"
                defaultValue={""}
                required
              />
            </div>
            <p className="mt-3 text-sm/6">Write a few description about.</p>
          </div>
          <ButtonGradiant text="Mint NFT" />
        </form>
      </div>
    </div>
  );
}
