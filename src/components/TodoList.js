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
    this.update = this.update.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  update(id, updatedTodo) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTodo };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
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
          updateTodo={this.update}
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
