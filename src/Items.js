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
      <div>
        <p>
          {this.props.items.name}
        </p>
      </div>
    );
  }
}