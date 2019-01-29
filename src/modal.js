import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userStatus: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      userStatus: true,
    });
  }

  onClick = () => {
        this.setState({
        userStatus: true,
        });
    }

  render() {
    return (
      this.state.userStatus = false ?
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login Form</ModalHeader>
          <ModalBody>
            <LoginForm />
            New member? <Button color = 'warning' onClick={this.state}> Sign up here</Button>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Log In</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      :
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Signup</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Signup Form</ModalHeader>
            <ModalBody>
                <SignupForm />
                Already a member? <Button color ='warning' onClick={this.toggle}>Log in here</Button>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sign Up</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;