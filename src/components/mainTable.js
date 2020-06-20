import React, { Component } from "react";
import TableRow from "./row";
import Search from "./search";

const styles = {
  card: {
    marginBottom: "20px",
  },
};

export default class Table extends Component {
  render() {
    return (
      <div>
        
        <div className="mainTable mainTable ">
          {/* Label Row */}
          <div className="mainTable search" style={styles.card}>
            <Search
              result={this.props.result}
              filtered={this.props.filtered}
              onChange={this.props.onChange}
            />
          </div>
          {/* Data Rows */}
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  </table>
          {this.props.filtered.map((data) => (
            <TableRow
              key={data.login.uuid}
              firstName={data.name.first}
              lastName={data.name.last}
              img={data.picture.medium}
              email={data.email}
              phone={data.phone}
              dob={data.dob.date}
              age={data.dob.age}
            />
          ))}
        </div>
      </div>
    );
  }
}
