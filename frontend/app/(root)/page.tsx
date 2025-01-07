import ConnectButton from "@/components/ui/connect-button";
import DisconnectButton from "@/components/ui/disconnect-button";

export default function Page() {
  return (
    <div className="py-20">
      <div className="mb-20 flex flex-col items-center justify-center">
        <ConnectButton />
        <DisconnectButton />
      </div>
    </div>
  );
}
