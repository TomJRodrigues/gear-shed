import React, { Component } from 'react';

export default class ListItems extends Component {
	constructor(props) {
		super(props);

		// function binding
    this.handleDelete = this.handleDelete.bind(this);

		// state
	} 

	// functions
  handleDelete(event) {     // this will bubble up item index to App with a helper
    event.preventDefault();
    this.props.handleDeleteHelper(this.props.index);
  }

  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.items.name}</td>
        <td>{this.props.items.notes}</td>
        <td>{this.props.items.quantity}</td>
        <td>{this.props.items.weight}</td>
        <td><button className="btn btn-sm btn-danger" onClick={this.handleDelete}>Delete</button></td>
      </tr>
    );
  }
}

ListItems.propTypes = {
  index: React.PropTypes.number,
  items: React.PropTypes.object.isRequired,
};