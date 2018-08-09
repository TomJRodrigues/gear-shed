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
		this.handleClick = this.handleClick.bind(this);

		// state
		this.state = {
			name: "Name",
			notes: "Notes",
			quantity: 1,
			weight: 0,
			selected: false,
			visible: true,
		}

	} 

	// functions

	handleSubmit(event) {					// packages up the current state in JSON and sends it up to App.js
		event.preventDefault();
		const weight = Number(this.state.weight);
		const newItem = {
			name: this.state.name,
			notes: this.state.notes,
			quantity: this.state.quantity,
			weight: weight,
			selected: this.state.selected,
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

  handleClick(e) {
  	let tempState = this.state;
  	tempState.visible = !tempState.visible;
  	this.setState(tempState);
  }

  render() {
  	const categoryHeader = <h3 className="inline-block">{this.props.items.category}</h3>

  	if (this.state.visible === true) {
  		return (
      <div>
      	<div onClick={this.handleClick} className="hover-hand">
      		<div className="glyphicon glyphicon-triangle-bottom"></div>{categoryHeader}
      	</div>
    		<Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Notes</th>
            <th>Quantity</th>
            <th>Weight (ea)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        	{this.props.items.items.map((resource, index) => {
	      		return (
	      			<Items
	      				key={index}
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
	      		<td><button className="btn btn-sm btn-primary" onClick={this.handleSubmit}>Submit</button></td>
	      	</tr>
        </tbody>
      	</Table>
    	</div>
    	);
  	}
  	else {
  		return (
  			<div onClick={this.handleClick} className="hover-hand">
  				<div className="glyphicon glyphicon-triangle-right"></div>{categoryHeader}
  			</div>
  		);
  	} 
  }
}

Category.propTypes = {
	index: React.PropTypes.number,
	items: React.PropTypes.object.isRequired,
	addNewItem: React.PropTypes.func,
	deleteItem: React.PropTypes.func,
	checkItem: React.PropTypes.func,
};