import React, { Component } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "./ChatPage.css";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // sender: "",
      content: "",
      pickVisible: true
    };
  }
  handleSubmit = () => {
    this.props.handleSubmit(this.state.content);
    this.setState({
      content: "",
      pickVisible: true
    });
  };
  handlePicker = () => {
    this.setState({
      pickVisible: !this.state.pickVisible
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.state.pickVisible ? "pick" : "nopick"}>
          <Picker
            set="apple"
            onClick={(emoji, event) =>
              this.setState({ content: this.state.content + emoji.native })
            }
            style={{
              position: "absolute",
              bottom: "30px",
              left: "2%"
            }}
          />
        </div>

        <Form onSubmit={this.handleSubmit} className="center">
          <Icon
            name="smile outline"
            onClick={this.handlePicker}
            className="emoji-icon"
          />

          <div className="msg-btn">
            <Form.Input
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
              <Icon name="send" color="black" />
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default InputContainer;
