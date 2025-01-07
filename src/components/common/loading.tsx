import { TextShimmer } from "../ui/text-shimmer";

const Loading = () => {
  return (
    <TextShimmer className="font-mono text-sm" duration={1.2}>
      Loading...
    </TextShimmer>
  );
};

export default Loading;
