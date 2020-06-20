import React, { Component } from "react";
import TableRow from "./row";
import Search from "./search";

export default class Table extends Component {

  render() {
    return (
      <div id="tableWrapper">
        <div className="mainTable mainTable--1cols">
          {/* Label Row */}
          <div className="mainTable-row-label">
          < Search result={this.props.result} filteredList={this.props.filteredList} onChange={this.props.onChange}/>
            <div className="mainTable-cell-label">Name</div>
            <div className="mainTable-cell-label">Email</div>
            <div className="mainTable-cell-label">Phone</div>
            <div className="mainTable-cell-label">Age</div>
          </div>
          {/* Data Rows */}
          {this.props.filteredList.map((person) => (
            <TableRow
              key={person.login.uuid}
              fName={person.name.first}
              lName={person.name.last}
              img={person.picture.medium}
              email={person.email}
              phone={person.phone}
              dob={person.dob.date}
              age={person.dob.age}
            />
          ))} 
        </div>
      </div>
    );
  }
}

