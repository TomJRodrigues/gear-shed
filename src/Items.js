import React, { Component } from 'react';

export default class Items extends Component {
	constructor(props) {
		super(props);

		// function binding
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

		// state

	} 

	// functions
  handleDelete(event) {     // this will bubble up item index to App with a helper
    event.preventDefault();
    this.props.handleDeleteHelper(this.props.index);
  }

  handleCheck(event) {    // bubbles up item index to App with a helper
    this.props.handleCheckHelper(this.props.index);
  }

  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td><input type="checkbox" checked={this.props.items.selected} onChange={this.handleCheck} /></td>
        <td>{this.props.items.name}</td>
        <td>{this.props.items.notes}</td>
        <td>{this.props.items.quantity}</td>
        <td>{this.props.items.weight}</td>
        <td><button className="btn btn-xs btn-danger" onClick={this.handleDelete}>Delete</button></td>
      </tr>
    );
  }
}