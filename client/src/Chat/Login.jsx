import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import "./LoginPage.css";
import SignUp from "./Signup";
import { animations } from "react-animation";

const LoginForm = props => (
  <Grid
    textAlign="center"
    style={{ height: "100vh", padding: "0px", margin: "0px" }}
    verticalAlign="middle"
    className="bg-main"
  >
    <Grid.Column style={{ maxWidth: 450, animation: animations.popIn }}>
      <Header
        style={{
          padding: "10px",
          background: "red",
          borderRadius: "10px"
        }}
        as="h1"
        inverted
      >
        The GlobalChat !
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Enter Your Name"
            name="enteredName"
            onChange={props.handleChange}
            required
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="pass"
            onChange={props.handleChange}
            required
          />

          <Button color="green" size="large" onClick={props.handleClick}>
            Login &nbsp; <Icon name="sign-in" />
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us?
        <SignUp />
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
