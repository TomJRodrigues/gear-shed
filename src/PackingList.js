import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ListItems from './ListItems.js';

export default class PackingList extends Component {
	constructor(props) {
		super(props);

		// function binding

		// state

	} 

	// functions

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
                <ListItems
                  index={index}
                  items={resource}
                  handleDeleteHelper={this.handleDeleteHelper}
                  handleCheckHelper={this.handleCheckHelper}
                />
              )}
            )}
          </tbody>
          </Table>
      </div>
    );
  }
}