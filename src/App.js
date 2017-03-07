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
    this.addCheckedToPackingList = this.addCheckedToPackingList.bind(this);
    this.filterSelected = this.filterSelected.bind(this);

    // state
    this.state = {
      packinglist: [
        {
          category: "Climbing",
          items: [
            // {
            //   name: "Harness",
            //   quantity: 2,
            //   notes: "Black Diamond Momentum",
            //   weight: 1250,
            //   selected: true,
            // },
            // {
            //   name: "Shoes",
            //   quantity: 8,
            //   notes: "Small",
            //   weight: 320,
            //   selected: true,
            // },
          ]
        },
      ],

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

  checkItem(categoryIndex, itemIndex) {     // updates state with an item's checked status
    const tempState = this.state;
    tempState.resources[categoryIndex].items[itemIndex].selected = !tempState.resources[categoryIndex].items[itemIndex].selected
    this.setState(tempState);
  }

  addNewItem(newItem, index) {      // Adds a new item to a category
    const tempState = this.state;
    tempState.resources[index].items.push(newItem);
    this.setState(tempState);
  }

  filterSelected(categoryItems) {
    console.log(categoryItems);
    const tempState = this.state;
    tempState.packinglist[0].items = [
            {
              name: "Harness",
              quantity: 2,
              notes: "Black Diamond Momentum",
              weight: 1250,
              selected: true,
            },
            {
              name: "Shoes",
              quantity: 8,
              notes: "Small",
              weight: 320,
              selected: true,
            },
          ];
    this.setState(tempState);
  }

  addCheckedToPackingList(event) {      // submits all checked items in shed to populate Packing List
    event.preventDefault();
    console.log("button does not do anything right now");
    this.filterSelected(0);
  }

  render() {
    return (
      <div className="container">
        <Login />
        <br/>
        <button className="btn btn-sm btn-primary" onClick={this.addCheckedToPackingList}>Add Selected to Packing List</button>
        <h2>Packing List: Overnight Climbing Trip</h2>
        {this.state.packinglist.map((resource, index) => {
          return (
            <PackingList
              index={index}
              items={resource}
            />
          )}
        )}
        <hr/>
        <hr/>
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