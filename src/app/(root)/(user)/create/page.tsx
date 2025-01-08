import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Create Page</h1>
      <div className={"flex flex-col"}>
        <Link href={"/create/mint"}>Mint NFT</Link>
        <Link href={"/create/collection"}>Collection</Link>
      </div>
    </div>
  );
}
