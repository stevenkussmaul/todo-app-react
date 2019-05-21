import React, { Component } from 'react';
// import './App.css';
import Todos from './components/Todos.js';

class App extends Component {
  state = {
    todos: 
    [
      {
        id: '1',
        title: 'trash',
        completed: false
      },
      {
        id: '2',
        title: 'Dinner',
        completed: false
      },
      {
        id: '3',
        title: 'walk Dog',
        completed: false
      }

    ]
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>hello world</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
