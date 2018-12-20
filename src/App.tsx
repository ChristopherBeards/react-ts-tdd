import * as React from 'react';
import './App.css';

import '../setupTests';

import Heading from './Heading';
class App extends React.Component {
  public render() {
      return (
          <div>
              <Heading />
          </div>
      );
  }
}

export default App;
