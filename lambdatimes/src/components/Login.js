import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid lightgray;
  &:focus {
    outline: 1px solid dodgerblue;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  inputHandler = (value, state) => {
    if (state === 'username') this.setState({ username: value });
    if (state === 'password') this.setState({ password: value });
  };

  submitHandler = e => {
    e.preventDefault();
    localStorage.setItem('react-lambda-times-noble', this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>
          <ModalHeader toggle={this.props.toggle}>Sign in</ModalHeader>
          <form onSubmit={e => this.submitHandler(e)}>
            <ModalBody>
              <Input
                value={this.state.username}
                onChange={e => this.inputHandler(e.target.value, 'username')}
                placeholder="Username"
              />
              <Input
                value={this.state.password}
                onChange={e => this.inputHandler(e.target.value, 'password')}
                placeholder="Password"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Sign me in</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  modal: PropTypes.bool.isRequired,
  currentUser: PropTypes.string,
  toggle: PropTypes.func.isRequired
}

export default Login;
