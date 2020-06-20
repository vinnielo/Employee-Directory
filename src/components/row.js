import React, { Component } from "react";

const styles = {
  card: {
    marginBottom: "10px",
    marginRight: "791px",
    marginLeft: "21px",
  },
};

export default class TableRow extends Component {
  render() {
    return (

        <table class="table">
  <thead>
    {/* <tr>
      <th scope="col">Picture</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr> */}
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={this.props.img} alt={this.props.firstName}></img></th>
      <td>{this.props.firstName} {this.props.lastName}</td>
      <td>{this.props.email}</td>
      <td>{this.props.age}</td>
    </tr>
     </tbody>
</table>
    //   <table className="table-dark" style={styles.card}>
    //     <thread>
    //       <tr>
    //         <th scope="col"></th>
    //         <th scope="col">Full Name</th>
    //         <th scope="col">Email</th>
    //         <th scope="col">Age</th>
    //         </tr>
    //     </thread>
    //         <tbody>
    //             <tr>
    //             <th scope="row"><img src={this.props.img} alt={this.props.firstName}></img></th>
    //   <td>{" "}
    //           Name: {this.props.firstName} {this.props.lastName}</td>
    //   <td>Email: {this.props.email}</td>
    //   <td> Age: {this.props.age}</td>


    //             </tr>


    //         <th className="mainTable pic" scope="row">
              
    //         </th>
    //         <th className="mainTable name" scope="col">
    //           {" "}
    //           Name: {this.props.firstName} {this.props.lastName}
    //         </th>
    //         <th className="mainTable email" scope="col">
    //           Email: {this.props.email}
    //         </th>
    //         <th className="mainTable phone" scope="col">
    //           Phone: {this.props.phone}
    //         </th>
    //         <th className="mainTable age" scope="col">
    //           Age: {this.props.age}
    //         </th>



    //         </tbody>
    //   </table>
    );
  }
}
