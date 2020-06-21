import React, { Component } from "react";
import Navitem from "./navitem";

const styles = {
  card: {
    color: "white",
    textAlign: "left",
    marginRight: "13px"
  },
  row:{
      float: "right"
  }
};

export default class Navbar extends Component {
  navItems = [{ id: 1, text: "Last Name" }];

  render() {
    return (
      <div className="navbar navbar-light bg-dark" style={styles.row}>
        <p style={styles.card}>Sort By:{" "}</p>
        <ul className="navbar-nav">
          <li>
            {this.navItems.map((navItem) => (
              <Navitem
                key={navItem.id}
                text={navItem.text}
                img={navItem.img}
                onClick={this.props.onClick}
              />
            ))}
          </li>
        </ul>
      </div>
    );
  }
}
