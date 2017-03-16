import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ListItems from './ListItems.js';
import { PieChart, Pie, Legend, Cell } from 'recharts';

export default class PackingList extends Component {
	constructor(props) {
		super(props);

		// function binding
    this.reduceToWeights = this.reduceToWeights.bind(this);
    this.handleDeleteHelper = this.handleDeleteHelper.bind(this);
    this.handleCheckHelper = this.handleCheckHelper.bind(this);

		// state
	} 

	// functions

  handleDeleteHelper(itemIndex) {       // bubbles up indices to App's state
    this.props.deleteItem(this.props.index, itemIndex);
  }

  handleCheckHelper(itemIndex) {
    this.props.checkItem(this.props.index, itemIndex);
  }

  reduceToWeights() {

  }

  render() {
    const data = this.props.items.items.map((resource) => {       // packages data for pie chart
      return (
        {name: resource.name,
         value: resource.weight,
        }
      )}
    )

    const COLORS = ['#0088FE', '#00C49F', '#8884D8', '#FFBB28', '#FF8042', '#E83F6F']; //  https://coolors.co/

    return (
      <div>
        <Table responsive>
        <thead>
          <tr>
            <th>#</th>
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
              <ListItems
                key={index}
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
          <PieChart width={600} height={300}>
            <Pie
              isAnimationActive={false} 
              data={data}
            >
              {data.map((entry, index) => 
                  <Cell 
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                )
              }
            </Pie>
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