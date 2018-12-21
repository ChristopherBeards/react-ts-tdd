import * as React from 'react';
import './App.css';

// Components
import Heading from './Heading';
import Counter from './Counter';
import { number } from 'prop-types';

interface IAppState {
  count: number;
}
class App extends React.Component<object, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({ count: this.state.count + inc });
  };

  public render() {
    return (
      <div>
        <Heading />
        <Counter
          label={'Current'}
          onCounterIncrease={this.increment}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default App;
