import React, { Component } from 'react';
import Items from './Items.js';
import { Table } from 'react-bootstrap';

export default class Category extends Component {
	constructor(props) {
		super(props);

		//function binding
		this.handleInputChange = this.handleInputChange.bind(this);

		//state
		this.state = {
			name: "Add New Resource",
			notes: "Notes",
			quantity: 1,
			weight: 0,
		}

	} 

	//functions

	handleInputChange(event) {    // allows typing in input fields and checking boxes
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
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
            </tr>
          </thead>
          <tbody>
          	{this.props.items.items.map((resource, index) => {
		      		return (
		      			<Items
		      				index={index}
		      				items={resource}
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
      		<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
      		<br/>
      		<label>
      			Notes
      		</label>
      		<input type="text" name="notes" value={this.state.notes} onChange={this.handleInputChange} />
      		<br/>
      		<label>
    				Quantity
      		</label>
      		<input type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
      		<br/>
      		<label>
      			Weight
      		</label>
      		<input type="text" name="weight" value={this.state.weight} onChange={this.handleInputChange} />
      	</form>
      </div>
    );
  }
}