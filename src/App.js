import React from 'react';
import { hot } from 'react-hot-loader';

import Hello from './components/Hello';
import './scss/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello hello={'Hello, world! And the people of the world!'} />
      </div>
    );
  }
}

export default hot(module)(App);
