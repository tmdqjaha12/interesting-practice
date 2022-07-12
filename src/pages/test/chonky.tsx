import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("src/components/Chonky"),
  { ssr: false }
);

const Chonky = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default Chonky;
