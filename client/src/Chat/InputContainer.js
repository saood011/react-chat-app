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
          placeholder="name"
          value={this.state.sender}
          onChange={e => {
            this.setState({ sender: e.target.value });
          }}
          required
        />
        <Form.Input
          placeholder="type your message here..."
          value={this.state.content}
          onChange={e => {
            this.setState({ content: e.target.value });
          }}
          required
        />
        <Button color="olive" type="submit">
          Send &nbsp; <Icon name="send" />
        </Button>
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
