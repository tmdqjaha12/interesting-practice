//@ts-ignore
import ReactImageAnnotate from "react-image-annotate";
// var ReactImageAnnotate = require("react-image-annotate");
// import Slider from "react-slick";
// import Dropzone from "react-dropzone";
import dynamic from "next/dynamic";

const ImgAnnotate = () => {
  return (
    <div>
      {/* <ReactImageAnnotate
        // labelImages
        regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={[
          {
            src: "https://placekitten.com/408/287",
            name: "Image 1",
            regions: [],
          },
        ]}
      /> */}
      <ReactImageAnnotate
        labelImages
        regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        images={[
          {
            src: "https://placekitten.com/408/287",
            name: "Image 1",
            regions: [],
          },
        ]}
      />
    </div>
  );
};

export default ImgAnnotate;
