import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './newTodoForm';
import '../styles/TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');

    if (todos) {
      const parsedJson = JSON.parse(todos);
      this.setState({ todos: parsedJson });
    } else {
      console.log('todos not found');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    const { todos } = this.state;

    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(todos);

      localStorage.setItem('todos', json);
    }
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

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  render() {
    console.log(this.state);
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          removeTodo={this.remove}
          updateTodo={this.update}
          completed={todo.completed}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="TodoList">
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
