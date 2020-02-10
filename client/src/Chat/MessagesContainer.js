import React, { Component } from "react";
import { Comment, Icon, Divider } from "semantic-ui-react";
import ScrollableFeed from "react-scrollable-feed";
import { animations } from "react-animation";

class MessagesContainer extends Component {
  render() {
    return (
      <ScrollableFeed>
        <Comment.Group>
          {this.props.messages.map((message, index) => {
            let d = new Date(Date.parse(message.timestamp));
            return (
              <Comment
                key={"c" + index}
                style={{
                  maxWidth: "100%",
                  animation: animations.bounceIn,
                  textAlign:
                    this.props.enteredName.toLowerCase() ===
                    message.sender.toLowerCase()
                      ? "right"
                      : "left"
                }}
              >
                <Comment.Author as="b">
                  <p className="sender">
                    <Icon name="user circle" /> {message.sender.toUpperCase()}{" "}
                  </p>
                </Comment.Author>
                <Comment.Text>
                  <p
                    className={
                      this.props.enteredName.toLowerCase() ===
                      message.sender.toLowerCase()
                        ? "messageContainer-content2"
                        : "messageContainer-content"
                    }
                  >
                    <span>{message.content}</span>
                    <small
                      className={
                        this.props.enteredName.toLowerCase() ===
                        message.sender.toLowerCase()
                          ? "timestamp2"
                          : "timestamp"
                      }
                    >
                      {d.toDateString() + " " + d.toLocaleTimeString()}
                    </small>
                  </p>
                </Comment.Text>
              </Comment>
            );
          })}
        </Comment.Group>
      </ScrollableFeed>
    );
  }
}

export default MessagesContainer;
