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

		// state
		this.state = {
			name: "Add New Resource",
			notes: "Notes",
			quantity: 1,
			weight: 0,
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

  render() {
    return (
      <div>
      	<h3>{this.props.items.category}</h3>
      		<Table responsive>
          <thead>
            <tr>
              <th>#</th>
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
		      			/>
		      		)}
		      	)}
          </tbody>
        </Table>
      	
      	<form>
      		Add a New Resource:
      		<br/>
      		<label>
      			Name
      		</label>
      		<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} size="16" />
      		<label>
      			Notes
      		</label>
      		<input type="text" name="notes" value={this.state.notes} onChange={this.handleInputChange} size = "24"/>
      		<label>
    				Quantity
      		</label>
      		<input type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} size = "4" />
      		<label>
      			Weight
      		</label>
      		<input type="text" name="weight" value={this.state.weight} onChange={this.handleInputChange} size = "5" />
      		<br/>
      		<button className="btn btn-xs btn-primary" onClick={this.handleSubmit}>Submit</button>
      	</form>
      </div>
    );
  }
}