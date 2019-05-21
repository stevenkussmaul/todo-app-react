import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos.js';
import './App.css';


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

  delTodo = (id) => {
    console.log(id);
    this.setState(
      {todos: [...this.state.todos.filter( todo => todo.id !== id )]}
    )
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
