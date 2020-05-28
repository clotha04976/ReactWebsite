import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World'
    }
  }

  changeTxext = () => {
    this.setState({ saySomething: 'How are you?' })
  }
  changeback = () => {
    this.setState({ saySomething: 'hello World' })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={this.changeTxext}>Click</button>
        <button onClick={this.changeback}>Click</button>
      </div>
    );
  }
}

export default App;



