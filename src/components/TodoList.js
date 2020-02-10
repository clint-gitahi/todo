import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './newTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: 'start leetcode' },
        { task: 'complete divide and conquer section' }
      ]
    };

    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
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
