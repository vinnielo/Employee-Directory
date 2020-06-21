import React, { Component } from "react";
import API from "../utils/Api";
import Jumbotron from "./jumbo";
import Table from "./mainTable";
import Navbar from "./navbar";


export default class Main extends Component {
  state = {
    results: 200,
    result: [],
    filtered: [],
  };

  searchName = (num) => {
    API.search(num)
      .then((res) => this.setState({ result: res.data.results }))
      .then(() => this.setState({ filtered: this.state.result }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.searchName(this.state.results);
  }

  onChange = (event) => {
    if (event.target.value.length < 1) {
      return this.setState({ filtered: this.state.result });
    } else {
      return this.setState({
        filtered: this.state.result.filter((data) => {          
          data.name.first.toLowerCase();
          data.name.last.toLowerCase();
          data.email.toLowerCase();
          return (
            data.name.first.includes(event.target.value.toLowerCase()) ||
            data.name.last.includes(event.target.value.toLowerCase()) ||
            data.email.includes(event.target.value.toLowerCase())
          );
        }),
      });
    }
  };

  onClick = (e) => {
    let firstNum = 1;
    let secondNum = -1;
    if (
      e.target.getAttribute("customSort") === "" ||
      e.target.getAttribute("customSort") === "Asc"
    ) {
      firstNum = 1;
      secondNum = -1;
      e.target.setAttribute("customSort", "Desc");
    } else {
      firstNum = -1;
      secondNum = 1;
      e.target.setAttribute("customSort", "Asc");
    }
    switch (e.target.id) {
      case "Last Name":
        return this.setState({
          filtered: this.state.filtered.sort((a, b) =>
            a.name.last > b.name.last ? firstNum : secondNum
          ),
        });
      default:
        return;
    }
  };

  render() {
    return (
      <main>
        <Jumbotron />
        <Navbar filtered={this.state.filtered} onClick={this.onClick} />
        <Table
          onChange={this.onChange}
          result={this.state.result}
          filtered={this.state.filtered}
        />
      </main>
    );
  }
}
