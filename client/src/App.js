import React, { Component } from "react";
import ChatPage from "./Chat/ChatPage";
import Login from "./Chat/Login";
class App extends Component {
  state = {
    pass: "",
    isLogged: false,
    enteredName: ""
  };
  handleClick = e => {
    this.setState({ isLogged: true });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return this.state.pass === "123" && this.state.isLogged ? (
      <div className="App">
        <ChatPage sender={this.state.enteredName} />
      </div>
    ) : (
      <Login handleChange={this.handleChange} handleClick={this.handleClick} />
    );
  }
}

export default App;
