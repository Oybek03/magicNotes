import React from "react";
import ReactDOM from "react-dom";

const ThemeBtn = function () {
  // let themes = document.querySelector(".btnTheme");
  let body = document.querySelector(".body");
  // themes.addEventListener("click", () => {
  //   body.classList.toggle("body");
  // });
  return (
    <div className="notes" style={{ display: "inline" }}>
      <div>
        <h1 className="head">
          <div>
            {" "}
            Magic <span>Notes</span>
          </div>
          <button
            className="btnTheme"
            type="submit"
            onClick={() => {
              body.classList.toggle("body");
            }}
          >
            Toggle Mode
          </button>
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default ThemeBtn;
