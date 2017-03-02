import React, { Component } from 'react';

export default class Login extends Component {
	constructor(props) {
		super(props);

		// function binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

		// state
    this.state = {
      username: "username",
      password: "password",
    }

	} 

	// functions
  handleInputChange(event) {    // allows typing in input fields and checking boxes
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("logged in as " + this.state.username + " " + this.state.password);
  }

  render() {
    return (
      <div>
        <form>
          Log In
          <br/>
          <label>
            Username
          </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} size="14" />
          <label>
            Password
          </label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} size="14" />
          <br/>
          <button className="btn btn-xs btn-primary" onClick={this.handleLogin}>Log In</button>
        </form>
      </div>
    );
  }
}