import React, { useState } from "react";
import ReactDOM from "react-dom";
let sana = new Date().toLocaleDateString();

// let btnSave = document.querySelector(".primary");
const change = function () {
  // btnSave.classList.add("none");
  console.log("ishladi");
};
let textArea = document.querySelector(".textarea");
// let uzunlik = (textArea.value = "sal");
// textArea.addEventListener("input", (e) => {
//   console.log(e);
// });'

let yangi = 0;
let eski = 0;
let ucYuz = 300;
let TextArea = function (props) {
  console.log(props);
  // let [borders, setBorders] = useState(2500);
  let borders;
  let kamayishFunc = (e) => {
    eski = yangi;
    yangi = e.target.value.length;
    let ucYuz = +(ucYuz - yangi + eski);
    console.log(ucYuz);

    borders = ucYuz;
  };
  // let conten = kamayishFunc();
  return (
    <div className="card">
      <textarea className="textarea" onInput={kamayishFunc}></textarea>
      <div className="del">
        {sana}
        <div>
          <div className="chegara">{borders}</div>
        </div>
        <div className="save">
          <i className="trash icon"></i>
          <button
            className="primary"
            onClick={() => {
              document.querySelector(".primary").classList.toggle("none");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
