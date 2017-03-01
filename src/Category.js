import React, { Component } from 'react';
import Items from './Items.js';

export default class Category extends Component {
	constructor(props) {
		super(props);

		//function binding
		this.handleInputChange = this.handleInputChange.bind(this);

		//state
		this.state = {
			name: "Add New Resource",
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
      	{this.props.items.items.map((resource, index) => {
      		return (
      			<Items
      				index={index}
      				items={resource}
      			/>
      		)}
      	)}
      	<form>
      		<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}/>
      	</form>
      </div>
    );
  }
}