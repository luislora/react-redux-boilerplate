import React, { Component } from 'react';
import ConnectedTestingContainer from '../containers/TestingContainer';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <ConnectedTestingContainer />
      </div>
    );
  }
}

export default App;