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

  onChange = (e) => {
    if (e.target.value.length < 1) {
      return this.setState({ filtered: this.state.result });
    } else {
      return this.setState({
        filtered: this.state.result.filter((entry) => {
          const lowerCase = entry;
          lowerCase.name.first.toLowerCase();
          lowerCase.name.last.toLowerCase();
          lowerCase.email.toLowerCase();
          return (
            lowerCase.name.first.includes(e.target.value.toLowerCase()) ||
            lowerCase.name.last.includes(e.target.value.toLowerCase()) ||
            lowerCase.email.includes(e.target.value.toLowerCase())
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
      case "Name":
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
