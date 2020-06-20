import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="searchBarWrapper">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search employees"
              aria-label="Search"
              onChange={this.props.onChange}
            />
          </form>
          <div className="mainTable search">
            sort by:
            <div
              className="mainTable btn btnName"
              onClick={() => this.handleClick()}
            >
              Name
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
