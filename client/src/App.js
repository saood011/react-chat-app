import React, { Component } from "react";
import ChatPage from "./Chat/ChatPage";
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
      <div>
        <form className="login-page">
          Your Name:
          <input type="text" onChange={this.handleChange} name="enteredName" />
          Password:
          <input type="password" onChange={this.handleChange} name="pass" />
          <button onClick={this.handleClick}>enter</button>
        </form>
      </div>
    );
  }
}

export default App;
