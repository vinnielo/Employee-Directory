import React, { Component } from "react";
import API from "../utils/Api";
import Jumbotron from "./jumbo";
import Table from "./mainTable";


export default class MainContent extends Component {
  state = {
    results: 100,
    result: [],
    filteredList: [],
  };

  searchPeople = (num) => {
    API.search(num)
      //Search sets the single source of truth, result, and the modifiable data, the filteredList
      .then((res) => this.setState({ result: res.data.results }))
      .then(() => this.setState({ filteredList: this.state.result }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.searchPeople(this.state.results);
  }

  onChange = (e) => {
    if (e.target.value.length < 1) {
      return this.setState({ filteredList: this.state.result });
    } else {
      return this.setState({
        filteredList: this.state.result.filter((entry) => {
          const lcEntry = entry;
          lcEntry.name.first.toLowerCase();
          lcEntry.name.last.toLowerCase();
          lcEntry.email.toLowerCase();
          return (
            lcEntry.name.first.includes(e.target.value.toLowerCase()) ||
            lcEntry.name.last.includes(e.target.value.toLowerCase()) ||
            lcEntry.email.includes(e.target.value.toLowerCase())
          );
        }),
      });
    }
  };

  onClick = (e) => {
    let firstNum = 1;
    let secondNum = -1;
    if (
      e.target.getAttribute("dataascordesc") === "" ||
      e.target.getAttribute("dataascordesc") === "Asc"
    ) {
      firstNum = 1;
      secondNum = -1;
      e.target.setAttribute("dataascordesc", "Desc");
    } else {
      firstNum = -1;
      secondNum = 1;
      e.target.setAttribute("dataascordesc", "Asc");
    }
    switch (e.target.id) {
      case "Name":
        return this.setState({
          filteredList: this.state.filteredList.sort((a, b) =>
            a.name > b.name ? firstNum : secondNum
          ),
        });
      case "Age":
        return this.setState({
          filteredList: this.state.filteredList.sort((a, b) =>
            a.dob.age > b.dob.age ? firstNum : secondNum
          ),
        });
      case "Phone":
        return this.setState({
          filteredList: this.state.filteredList.sort((a, b) =>
            a.dob.phone > b.dob.phone ? firstNum : secondNum
          ),
        });
      case "Email":
        return this.setState({
          filteredList: this.state.filteredList.sort((a, b) =>
            a.dob.email > b.dob.email ? firstNum : secondNum
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
        <Table
          onChange={this.onChange}
          result={this.state.result}
          filteredList={this.state.filteredList}
        />
      </main>
    );
  }
}
