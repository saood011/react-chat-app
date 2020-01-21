import React, { Component } from "react";
import { Comment, Icon } from "semantic-ui-react";
import ScrollableFeed from "react-scrollable-feed";

class MessagesContainer extends Component {
  render() {
    return (
      <ScrollableFeed>
        <Comment.Group>
          {this.props.messages.map((message, index) => {
            return (
              <Comment key={"c" + index}>
                <Comment.Author as="b">
                  <p className="sender">
                    {" "}
                    <Icon name="user circle" /> {message.sender.toUpperCase()}{" "}
                  </p>
                </Comment.Author>
                <Comment.Text>
                  <p className="content"> {message.content} </p>
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
