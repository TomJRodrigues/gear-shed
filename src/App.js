import React, { Component } from 'react';
// import Header from './Header.js';
import Login from './Login.js';
// import PageTitle from './PageTitle.js';
import PackingList from './PackingList.js';
import Category from './Category.js';

class App extends Component {
  constructor() {
    super();

    //function binding
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);

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
              selected: true,
            },
            {
              name: "Chalkbag",
              quantity: 4,
              notes: "Filled",
              weight: 120,
              selected: false,
            },
            {
              name: "Shoes",
              quantity: 8,
              notes: "Small",
              weight: 320,
              selected: true,
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
              selected: false,
            },
            {
              name: "Bivvy",
              quantity: 1,
              notes: "Outdoor Research",
              weight: 230,
              selected: false,
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
              selected: false,
            },
            {
              name: "0 degree synthetic",
              quantity: 1,
              notes: "Mountain Hardwear Lamina",
              weight: 1300,
              selected: false,
            },
            {
              name: "30 degree synthetic",
              quantity: 1,
              notes: "Ecuador score",
              weight: 750,
              selected: false,
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

  checkItem(categoryIndex, itemIndex) {
    const tempState = this.state;
    console.log(tempState.resources[categoryIndex].items[itemIndex].selected)
    tempState.resources[categoryIndex].items[itemIndex].selected = !tempState.resources[categoryIndex].items[itemIndex].selected
    console.log(tempState.resources[categoryIndex].items[itemIndex].selected);
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
        <Login />
        <PackingList />
        {this.state.resources.map((resource, index) => {
          return (
            <Category
              index={index}
              items={resource}
              addNewItem={this.addNewItem}
              deleteItem={this.deleteItem}
              checkItem={this.checkItem}
            />
          )}
        )}
      </div>
    );
  }
}

export default App;