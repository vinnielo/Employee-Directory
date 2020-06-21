import React, { Component } from "react";

const styles = {
  card: {
    textAlign: "center"
  },
  row: {
    fontWeight: "bold"
  }
};

export default class TableRow extends Component {
  render() {
    return (


    <tr>
      <th scope="row"><img src={this.props.img} alt={this.props.firstName}></img></th>
      <td style={styles.row} >{this.props.firstName} {this.props.lastName}</td>
      <td style={styles.row}>{this.props.email}</td>
      <td style={styles.row}>{this.props.age}</td>
    </tr>
 
    );
  }
}
