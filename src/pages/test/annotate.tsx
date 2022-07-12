import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("src/components/Annotate"),
  { ssr: false }
);

const annotate = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
      {/* <ImgAnnotate /> */}
    </div>
  );
};

export default annotate;
