import React, { Component } from 'react';
// import './App.css';
import Todos from './components/Todos.js';

class App extends Component {
  state = {
    todos: 
    [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Walk the Dog',
        completed: false
      }

    ]
  }

  //toggle item marked as complete
  markComplete = (id) => {
    console.log(id);
      this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>hello world</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
