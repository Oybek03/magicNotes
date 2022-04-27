import React from "react";
import "../StyleImage.css";

const Pagination = function (props) {
  console.log(props);
  const oldinga = () => {
    console.log("next");
    props.malumotniOl(props.search, props.page + 1);
  };
  const orqaga = () => {
    props.malumotniOl(props.search, props.page - 1);
  };
  return (
    <>
      <div className="buttons">
        <button onClick={orqaga} className="prev_btn btn">
          back
        </button>
        <h3>{props.page}</h3>
        <button onClick={oldinga} className="next_btn btn">
          Next
        </button>
      </div>
    </>
  );
};
export default Pagination;
