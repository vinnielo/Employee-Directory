import React, { Component } from "react";
import API from "../utils/Api";
import Jumbotron from "./jumbo";
import Table from "./mainTable";


export default class Main extends Component {
  state = {
    results: 300,
    result: [],
    filtered: [],
  };

  searchPeople = (num) => {
    API.search(num)      
      .then((res) => this.setState({ result: res.data.results }))
      .then(() => this.setState({ filtered: this.state.result }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.searchPeople(this.state.results);
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

  handleFormSubmit = event => {
   
  };

  

  render() {
    return (
      <main>
        <Jumbotron />
        <Table
          onChange={this.onChange}
          result={this.state.result}
          filtered={this.state.filtered}
        />
      </main>
    );
  }
}
