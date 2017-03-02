import React, { Component } from 'react';
import Items from './Items.js';
import { Table } from 'react-bootstrap';

export default class Category extends Component {
	constructor(props) {
		super(props);

		// function binding
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDeleteHelper = this.handleDeleteHelper.bind(this);
		this.handleCheckHelper = this.handleCheckHelper.bind(this);

		// state
		this.state = {
			name: "Name",
			notes: "Notes",
			quantity: 1,
			weight: 0,
			selected: false,
		}

	} 

	// functions

	handleSubmit(event) {					// packages up the current state in JSON and sends it up to App.js
		event.preventDefault();
		const newItem = {
			name: this.state.name,
			notes: this.state.notes,
			quantity: this.state.quantity,
			weight: this.state.weight,
		}
		this.props.addNewItem(newItem, this.props.index);
	}

	handleInputChange(event) {    // allows typing in input fields and checking boxes
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleDeleteHelper(itemIndex) {				// bubbles up indices to App's state
  	this.props.deleteItem(this.props.index, itemIndex);
  }

  handleCheckHelper(itemIndex) {
  	this.props.checkItem(this.props.index, itemIndex);
  }

  render() {
    return (
      <div>
      	<h3>{this.props.items.category}</h3>
      		<Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Notes</th>
              <th>Quantity</th>
              <th>Weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          	{this.props.items.items.map((resource, index) => {
		      		return (
		      			<Items
		      				index={index}
		      				items={resource}
		      				handleDeleteHelper={this.handleDeleteHelper}
		      				handleCheckHelper={this.handleCheckHelper}
		      			/>
		      		)}
		      	)}
		      	<tr>
		      		<td>+</td>
		      		<td></td>
		      		<td><input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} size="16" /></td>
		      		<td><input type="text" name="notes" value={this.state.notes} onChange={this.handleInputChange} size="28"/></td>
		      		<td><input type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} size="4" /></td>
		      		<td><input type="text" name="weight" value={this.state.weight} onChange={this.handleInputChange} size="5" /></td>
		      		<td><button className="btn btn-xs btn-primary" onClick={this.handleSubmit}>Submit</button></td>
		      	</tr>
          </tbody>
        </Table>
      </div>
    );
  }
}