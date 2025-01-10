import { TextShimmerWave } from "../ui/text-shimmer-wave";

const Loading = () => {
  return (
    <TextShimmerWave
      className="font-mono text-sm [--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]"
      duration={1}
    >
      Loading...
    </TextShimmerWave>
  );
};

export default Loading;
