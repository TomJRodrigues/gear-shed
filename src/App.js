import React, { Component } from 'react';
// import Header from './Header.js';
// import PageTitle from './PageTitle.js';
import Category from './Category.js';

class App extends Component {
  constructor() {
    super();

    //function binding
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    // state
    this.state = {
      resources: [
        {
          category: "Climbing",
          items: [
            {
              name: "Harness",
              quantity: 2,
              notes: "Black Diamond Momentum",
              weight: 1250,
            },
            {
              name: "Chalkbag",
              quantity: 4,
              notes: "Filled",
              weight: 120,
            },
            {
              name: "Shoes",
              quantity: 8,
              notes: "Small",
              weight: 320,
            },
          ]
        },
        {
          category: "Shelters",
          items: [
            {
              name: "Tarp",
              quantity: 1,
              notes: "Granite gear blue and white",
              weight: 400,
            },
            {
              name: "Bivvy",
              quantity: 1,
              notes: "Outdoor Research",
              weight: 230,
            },
          ]
        },
        {
          category: "Sleep System",
          items: [
            {
              name: "15 degree down",
              quantity: 1,
              notes: "Lost and found score",
              weight: 600,
            },
            {
              name: "0 degree synthetic",
              quantity: 1,
              notes: "Mountain Hardwear Lamina",
              weight: 1300,
            },
            {
              name: "30 degree synthetic",
              quantity: 1,
              notes: "Ecuador score",
              weight: 750,
            },
          ]
        }
      ]
    }
  }

  //functions

  deleteItem(categoryIndex, itemIndex) {
    const tempState = this.state;
    tempState.resources[categoryIndex].items.splice(itemIndex, 1);
    this.setState(tempState);
  }

  addNewItem(newItem, index) {
    const tempState = this.state;
    tempState.resources[index].items.push(newItem);
    this.setState(tempState);
  }

  render() {
    return (
      <div className="container">
        {this.state.resources.map((resource, index) => {
          return (
            <Category
              index={index}
              items={resource}
              addNewItem={this.addNewItem}
              deleteItem={this.deleteItem}
            />
          )}
        )}
      </div>
    );
  }
}

export default App;