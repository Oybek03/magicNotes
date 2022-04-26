import React from "react";
import "../StyleImage.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageDOM = React.createRef();
    this.state = { spans: 0 };
  }

  setSpan = () => {
    const height = this.imageDOM.current.clientHeight;
    const spans = Math.ceil(height + 10);
    this.setState({ spans: spans });
  };
  componentDidMount() {
    console.log(this.imageDOM);
    this.imageDOM.current.addEventListener("load", this.setSpan);
  }
  render() {
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imageDOM}
        src={this.props.data.urls.regular}
        alt={this.props.alt_description}
      />
    );
  }
}
export default ImageCard;
