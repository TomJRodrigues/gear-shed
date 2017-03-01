import React, { Component } from 'react';

export default class Items extends Component {
	constructor(props) {
		super(props);

		//function binding


		//state


	} 

	//functions

  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.items.name}</td>
        <td>{this.props.items.notes}</td>
        <td>{this.props.items.quantity}</td>
        <td>{this.props.items.weight}</td>
      </tr>
    );
  }
}