import React, { Component } from "react";
import TableRow from "./row";
import Search from "./search";

const styles = {
  card: {
    marginBottom: "20px",
  },
  row: {
    textAlign: "center",
  },
  edge:{
    marginLeft: "25px",
    marginRight: "25px"
  }
};

export default class Table extends Component {
  rowData() {
    return this.props.filtered.map((data) => (
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
    ));
  }

  render() {
    return (
      <div>
        <div className="mainTable mainTable " style={styles.edge}>
          {/* Label Row */}
          <div className="mainTable search" style={styles.card}>
            <Search
              result={this.props.result}
              filtered={this.props.filtered}
              onChange={this.props.onChange}
            />
          </div>
          {/* Data Rows */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
          <tbody>
            {this.rowData()}            
          </tbody>
              </table>
        </div>
      </div>
    );
  }
}
