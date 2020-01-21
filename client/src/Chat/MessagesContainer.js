import React, { Component } from "react";
import { Comment, Icon } from "semantic-ui-react";
import ScrollableFeed from "react-scrollable-feed";

class MessagesContainer extends Component {
  render() {
    return (
      <ScrollableFeed>
        <Comment.Group>
          {this.props.messages.map((message, index) => {
            let d = new Date(Date.parse(message.timestamp));
            return (
              <Comment key={"c" + index}>
                <Comment.Author as="b">
                  <p className="sender">
                    <Icon name="user circle" /> {message.sender.toUpperCase()}{" "}
                  </p>
                </Comment.Author>
                <Comment.Text>
                  <p className="content">
                    <span>{message.content}</span>
                    <small className="timestamp">
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
