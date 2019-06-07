import React from 'react';

const withAuthenticate = (Login) => (Content) => {
  return class extends React.Component {
    state = {
      isLoggedIn: false
    }

    componentDidMount() {
      const isLoggedIn = !!localStorage.getItem('react-lambda-times-noble');
      if (isLoggedIn) {
        this.setState({ isLoggedIn });
      } 
    }

    render() {
      if (this.state.isLoggedIn) {
        return <Content />
      } else {
        return <Login {...this.props} />
      }
    }
  }
}

export default withAuthenticate;
