import React, { Component } from "react";

const styles = {
  card: {
    paddingBottom: "10px",
  }
  
};

export default class Search extends Component {

 
  render() {
    return (
      <div className="searchBarWrapper">
        <nav className="navbar navbar-light bg-dark" style={styles.card}>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search employees"
              aria-label="Search"
              onChange={this.props.onChange}
            />
          </form>
        </nav>
      </div>
    );
  }
}
