import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
            <div className="mainTable-row">
            <div className="mainTable-cell img-cell"><img src={this.props.img} alt="employee"></img></div>
            <div className="mainTable-cell">{this.props.fName} {this.props.lName}</div>
            <div className="mainTable-cell">{this.props.email}</div>
            <div className="mainTable-cell">{this.props.phone}</div>
            <div className="mainTable-cell">{this.props.age}</div>    
            </div>
        )
    }
}

