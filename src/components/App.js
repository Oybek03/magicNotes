import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
class App extends React.Component {
  state = { imageArr: [], search: "", page: 1 };

  searchdanMalumotniOl = async (data1, pg = 1) => {
    if (pg) {
      this.setState({ search: data1 });
      this.setState({ page: pg });
    }
    console.log(this.state.page);
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: data1,
        page: pg,
        per_page: 10,
      },
      headers: {
        Authorization: "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
      },
    });
    this.setState({ imageArr: data.data.results });
  };

  // componentDidUpdate() {
  //   this.getData();
  // }

  render() {
    return (
      <div>
        <SearchBar malumotniOl={this.searchdanMalumotniOl} />
        <br />
        <ImageList dataImg={this.state.imageArr} />
        <Pagination
          malumotniOl={this.searchdanMalumotniOl}
          page={this.state.page}
          search={this.state.search}
        />
      </div>
    );
  }
}
export default App;
