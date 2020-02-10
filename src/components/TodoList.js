import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './newTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          removeTodo={this.remove}
        />
      );
    });
    return (
      <div>
        <h1>
          Todo list <span>Simple Todo List App</span>
          <NewTodoForm createTodo={this.create} />
          <ul>{todos}</ul>
        </h1>
      </div>
    );
  }
}

export default TodoList;
