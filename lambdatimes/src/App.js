import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import withAuthenticate from './components/auth/withAuthenticate';

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
      <div className="App">
        <TopBar
          currentUser={this.state.currentUser}
          toggle={this.toggle}
          logout={this.logout}
        />
        <Header />
        <AuthComponent {...this.state} toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
