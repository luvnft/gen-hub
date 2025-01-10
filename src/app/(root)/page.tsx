import ConnectButton from "@/components/thirdweb/connect-button";
import DisconnectButton from "@/components/thirdweb/disconnect-button";
import NetworkSwitcher from "@/components/thirdweb/network-switcher";
import Loading from "@/components/common/loading";

export default function Page() {
  return (
    <div className="mb-20 flex flex-col items-center justify-center">
      <ConnectButton />
      <DisconnectButton />
      <NetworkSwitcher />
      <Loading />
    </div>
  );
}
