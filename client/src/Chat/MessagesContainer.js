import React, { Component } from "react";
import { Comment } from "semantic-ui-react";
import ScrollableFeed from "react-scrollable-feed";

class MessagesContainer extends Component {
  render() {
    return (
      <ScrollableFeed>
        <Comment.Group>
          {this.props.messages.map((message, index) => {
            return (
              <Comment key={"c" + index}>
                <Comment.Author as="b">{message.sender}</Comment.Author>
                <Comment.Text>{message.content}</Comment.Text>
              </Comment>
            );
          })}
        </Comment.Group>
      </ScrollableFeed>
    );
  }
}

export default MessagesContainer;
