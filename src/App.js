import React, { Component } from 'react';
import Header from './Header.js';
import PageTitle from './PageTitle.js';
import Category from './Category.js';

class App extends Component {
  constructor() {
    super();

    //function binding

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

  render() {
    return (
      <div className="container">
        <Header />
        <PageTitle />
        {this.state.resources.map((resource, index) => {
          return (
            <Category
              index={index}
              items={resource}
            />
          )}
        )}
      </div>
    );
  }
}

export default App;