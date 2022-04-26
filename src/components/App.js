import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
class App extends React.Component {
  
  searchdanMalumotniOl = async (data1) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: data1,
        page: this.state.page,
        per_page: 5,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    console.log(data);
    this.setState({ imageArr: data.data.results });
    console.log(this.state.imageArr);
  };

  // componentDidUpdate() {
  //   this.getData();
  // }
  btnClick() {
    this.setState({ page: 2 });
    console.log(this.state.page);
  }
  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.searchdanMalumotniOl} />
        <ImageList dataImg={this.state.imageArr} />
        <button onClick={this.btnClick}>lll</button>
      </div>
    );
  }
}
export default App;
