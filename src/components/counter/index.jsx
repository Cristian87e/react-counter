import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      value: 1,
    }
  }
  updateValue(e) {
    this.setState({ value: e.target.value })
  }
  increment() {
    const value = this.state.value + 1;
    this.setState({ value })
  }
  decrement() {
    const value = this.state.value - 1;
    this.setState({ value })
  }
  incrementIfOdd() {
    if (this.state.value % 2) {
      const value = this.state.value + 1;
      this.setState({ value })
    }
  }
  incrementAsync() {
    const self = this;
    setTimeout(() => {
      const value = self.state.value + 1;
      self.setState({ value })
    }, 2000)
  }
  render() {
    return (
      <div className="counter">
        <input type="text" value={this.state.value} onChange={this.updateValue.bind(this)} />
        <div>
          <button onClick={this.increment.bind(this)}>Increment</button>
          <button onClick={this.decrement.bind(this)}>Decrement</button>
          <button onClick={this.incrementIfOdd.bind(this)}>Increment If Odd</button>
          <button onClick={this.incrementAsync.bind(this)}>Increment Async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
