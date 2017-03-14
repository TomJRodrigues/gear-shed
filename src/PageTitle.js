import React, { Component } from 'react';

export default class PageTitle extends Component {

  render() {
  	const pageTitle = "My Gear Shed"
    return pageTitle && (
      <div>
	      <h2>{pageTitle}</h2>
      </div>
    );
  }
}