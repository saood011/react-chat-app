import React, { Component } from "react";
import { Button, Modal, Form, Message, Transition } from "semantic-ui-react";

class SignUp extends Component {
  state = { open: false, email: "", name: "", message: "", isEmailSent: false };

  show = size => () => this.setState({ size, open: true });

  close = () => this.setState({ open: false });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => {
    console.log("i am handle submit");
    let reqBody = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    fetch("/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    })
      .then(res => {
        console.log("response with json" + res);

        return res.json();
      })
      .then(resJson => {
        console.log(resJson);
        this.setState({ isEmailSent: resJson.response });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { open, size, isEmailSent } = this.state;

    return (
      <div>
        <Button inverted color="blue" size="mini" onClick={this.show("small")}>
          Request Password
        </Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Request password !</Modal.Header>
          <Modal.Content>
            <Form success>
              <Form.Input
                label="Name"
                placeholder="Enter your name"
                required
                name="name"
                onChange={this.handleChange}
              />
              <Form.Input
                label="Email"
                placeholder="joe@schmoe.com"
                required
                onChange={this.handleChange}
                name="email"
              />
              <Form.Input
                label="Message"
                placeholder="Type your message here..."
                required
                onChange={this.handleChange}
                name="message"
              />
              <Transition
                visible={isEmailSent}
                animation="scale"
                duration={500}
              >
                {isEmailSent ? (
                  <Message
                    success
                    header="Email successfully sent!"
                    content="You'll get the password very soon, Thank you!"
                  />
                ) : (
                  <Message
                    color="red"
                    header="Internal Error"
                    content="Sorry! We are working on it."
                  />
                )}
              </Transition>
              {isEmailSent ? (
                <Button color="red" onClick={this.close}>
                  Close
                </Button>
              ) : (
                <Button color="green" onClick={this.handleSubmit}>
                  Send
                </Button>
              )}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
