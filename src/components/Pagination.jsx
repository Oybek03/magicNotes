import React from "react";
import "../StyleImage.css";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pagination-btn">
        <button className="btn"> orqaga</button>
        <div>{this.props.knopka} </div>
        <button className="btn">oldinga </button>
      </div>
    );
  }
}
export default Pagination;
