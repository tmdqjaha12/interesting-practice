import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("src/components/Leaflet"),
  { ssr: false }
);

const Leaflet = () => {
  return (
    <>
      <div>
        <DynamicComponentWithNoSSR />
        {/* <h1>hi</h1> */}
      </div>
    </>
  );
};

export default Leaflet;
