import React, { Component } from "react";
import { Form, Button, Icon } from "semantic-ui-react";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: "",
      content: ""
    };
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="center">
        <Form.Input
          icon="users"
          iconPosition="left"
          placeholder="Enter your name here"
          value={this.state.sender}
          onChange={e => {
            this.setState({ sender: e.target.value });
          }}
          required
          className="name-input"
        />
        <div className="msg-btn">
          <Form.Input
            icon="chat"
            iconPosition="left"
            placeholder="Type your message here..."
            value={this.state.content}
            onChange={e => {
              this.setState({ content: e.target.value });
            }}
            required
            className="msg-input"
          />
          <Button color="olive" type="submit" className="btn">
            <Icon name="send" />
          </Button>
        </div>
      </Form>
    );
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.sender, this.state.content);
    this.setState({
      content: ""
    });
  };
}

export default InputContainer;
