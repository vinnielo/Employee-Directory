import React, { Component } from "react";

const styles = {
    card: {
      backgroundColor: "White",
      padding: "10px",
      borderRadius: "12px",
      fontWeight: "bold",
      color: "black"
    },
  };

export default class Navitem extends Component {
  render() {
    return (
      <li className="nav-item" onClick={this.props.onClick}>
        <div className="nav-link">
          {this.props.text.length > 0 && (
            <span className="nav-text" id={this.props.text} customSort='' style={styles.card}> {this.props.text}</span>
          )}
        </div>
      </li>
    );
  }
}

