import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import withAuthenticate from './components/auth/withAuthenticate';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const AuthComponent = withAuthenticate(Login)(Content);

class App extends Component {
  state = {
    modal: true,
    currentUser: ''
  };

  componentDidMount() {
    let currentUser = localStorage.getItem('react-lambda-times-noble');
    this.setState({ currentUser });
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  logout = () => {
    localStorage.removeItem('react-lambda-times-noble');
    window.location.reload();
  };

  render() {
    return (
      <AppContainer>
        <TopBar
          currentUser={this.state.currentUser}
          toggle={this.toggle}
          logout={this.logout}
        />
        <Header />
        <AuthComponent {...this.state} toggle={this.toggle} />
      </AppContainer>
    );
  }
}

export default App;
