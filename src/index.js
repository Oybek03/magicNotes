import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import ThemeBtn from "./ThemeBtn";
import TextArea from "./TextArea";

const App = function () {
  return (
    <div>
      <ThemeBtn />
      <Search />
      <div className="card-grid">
        <TextArea son={300} />
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
