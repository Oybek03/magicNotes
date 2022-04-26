import React from "react";
import "../StyleImage.css";
import ImageCard from "./ImageCard";
// class ImageList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="list">

//         <img
//           width={"400px"}
//           src="https://unsplash.com/photos/a4S6KUuLeoM/download?ixid=MnwzMjI1MDN8MHwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNjUwODc5NTM4"
//           alt=""
//         />
//       </div>
//     );
//   }
// }

const ImageList = (props) => {
  const imageRender = () => {
    return props.dataImg.map((val) => {
      return <ImageCard data={val} key={val.id} />;
    });
  };
  return (
    <>
      <div className="img-list">{imageRender()}</div>
    </>
  );
};
export default ImageList;
