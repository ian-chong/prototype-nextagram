import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignupForm extends React.Component {

  constructor () {
    this.state = {
      username:'',
      email: '',
      password: '',

    }
  }


  onClick = (event) => {
    event.preventDefault()
    this.setState({
      username: event.target.username,
      email: event.target.email,
      password: event.target.password,
    })
    console.log (event.target.value)
  }


  render() {
    return (
      <Form> 
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="username" name="username" id="exampleUsername" placeholder="Please enter in username" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Please enter in email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Please enter in password" />
        </FormGroup>
      </Form>
    );
  }
}