import React from 'react';

class Counter extends React.Component {
  state = {
    counterValue: 0,
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <div>{this.state.counterValue}</div>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }

  decrement = () => {
    this.setState((state) => {
      return {
        counterValue: state.counterValue - 1,
      };
    });
  };

  increment = () => {
    this.setState((state) => {
      return {
        counterValue: state.counterValue + 1,
      };
    });
  };
}

export default Counter;
