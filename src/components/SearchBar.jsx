import React from "react";

class SearchBar extends React.Component {
  state = { kalitSuz: "" };
  // constructor(props) {
  //   super(props);
  //   this.inputMalumotniOl = this.inputMalumotniOl.bind(this);
  // }
  inputMalumotniOl = (e) => {
    this.setState({ kalitSuz: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.malumotniOl(this.state.kalitSuz);
  };
  render() {
    return (
      <div>
        <form
          className="ui category search"
          style={{ marginTop: "30px" }}
          onSubmit={this.onFormSubmit}
        >
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              className="prompt"
              type="text"
              placeholder="Search animals..."
              onChange={(e) => this.inputMalumotniOl(e)}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
