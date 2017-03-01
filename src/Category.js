import React, { Component } from 'react';
import Items from './Items.js';

export default class Category extends Component {
	constructor(props) {
		super(props);

		//function binding


		//state


	} 

	//functions

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
      </div>
    );
  }
}