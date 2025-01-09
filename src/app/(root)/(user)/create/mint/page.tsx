"use client";

import { Suspense, useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import ButtonGradiant from "@/components/ui/button-gradiant";
import Loading from "@/components/common/loading";
import { Plus } from "lucide-react";
import BackButton from "@/components/common/back-button";

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [files, setFiles] = useState<File>();
  const handleFileUpload = (files: File) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full flex-col">
        <div className="flex flex-col-reverse justify-between gap-8 pb-10 md:flex-row">
          <div>
            <h1 className="text-xl font-bold sm:text-3xl">Create an NFT</h1>
            <p className="text-md font-bold sm:text-xl">
              Once your item is minted you will not be able to change any of its
              information.
            </p>
          </div>
          <BackButton className="h-fit" href="/create" />
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row">
          <div className="flex-1">
            <Suspense fallback={<Loading />}>
              <div className="mx-auto w-full max-w-5xl gap-4 rounded-lg border border-dashed border-border bg-white dark:border-neutral-800 dark:bg-black">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </Suspense>
          </div>

          <div className="flex-1">
            <form className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="collection"
                  className="block text-sm/6 font-bold dark:text-text-dark"
                >
                  Collection*
                </label>
                <div className="mt-2 flex h-24 w-full cursor-not-allowed items-center gap-4 rounded-md bg-gray-100 p-4 shadow">
                  <div className="grid h-16 w-16 place-items-center rounded-md bg-gray-200">
                    <Plus />
                  </div>
                  <p className="text-sm/6 font-bold">
                    Select a collection to mint your NFT.
                  </p>
                </div>
                <p className="mt-3 text-sm/6">
                  Not all collections are eligible.
                  <span className="cursor-not-allowed text-link">
                    Learn more
                  </span>
                </p>
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm/6 font-bold dark:text-text-dark"
                >
                  Name*
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

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-bold text-gray-900 dark:text-text-dark"
                >
                  Description*
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
      </div>
    </div>
  );
}
