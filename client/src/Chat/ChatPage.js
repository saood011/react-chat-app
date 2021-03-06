import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import MessagesContainer from "./MessagesContainer";
import InputContainer from "./InputContainer";
import "./ChatPage.css";
import openSocket from "socket.io-client";

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: openSocket("https://chatwithsaood.herokuapp.com/")
    };

    this.state.socket.on("new-message", message => {
      let currentMessages = this.state.messages;
      currentMessages.push(message);
      this.setState({
        messages: currentMessages
      });
    });
  }

  componentDidMount() {
    fetch("/api/message", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.setState({
          messages: resJson
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container className="mainContainer">
        <Grid>
          <Grid.Column mobile={16} className="bg-container">
            <h1 className="text-center">
              Welcome to the GlobalChat! <br></br>
            </h1>

            <Grid.Row className="messages-container">
              {this.state.messages.length > 0 ? (
                <MessagesContainer
                  messages={this.state.messages}
                  enteredName={this.props.sender}
                />
              ) : (
                <div />
              )}
            </Grid.Row>
            <Grid.Row>
              <InputContainer handleSubmit={this.handleSubmit} />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }

  handleSubmit = content => {
    let reqBody = {
      sender: this.props.sender,
      content: content
    };

    fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.state.socket.emit("new-message", resJson);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default ChatPage;
