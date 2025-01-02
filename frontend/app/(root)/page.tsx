import { client } from "@/lib/client";
import { ConnectButton } from "thirdweb/react";

export default function Page() {
  return (
    <div className="py-20">
      <div className="mb-20 flex justify-center">
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Example App",
            url: "https://example.com",
          }}
        />
      </div>
    </div>
  );
}
