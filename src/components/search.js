import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        return (
            <div className="searchBarWrapper">
          <input
            onChange={this.props.onChange}
            type="text"
            name="search"
            placeholder="Filter Search"
          ></input>
        </div>
        )
    }
}

