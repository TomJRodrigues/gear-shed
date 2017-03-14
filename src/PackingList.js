import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ListItems from './ListItems.js';
import { PieChart, Pie, Legend } from 'recharts';

export default class PackingList extends Component {
	constructor(props) {
		super(props);

		// function binding
    this.reduceToWeights = this.reduceToWeights.bind(this);

		// state
	} 

	// functions

  reduceToWeights() {

  }

  render() {
    let data01 = [{name: 'harness', value: 400}, {name: 'chalkbag', value: 300},
                  {name: 'carabiners', value: 300}, {name: 'helmet', value: 200},
                  {name: 'rope', value: 278}, {name: 'shoes', value: 189}];

    return (
      <div>
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
        <div>
          <PieChart width={800} height={400}>
            <Pie isAnimationActive={false} data={data01}/>
            <Legend />
          </PieChart>
        </div>
      </div>
    );
  }
}

PackingList.propTypes = {
  index: React.PropTypes.number,
  items: React.PropTypes.object,
};