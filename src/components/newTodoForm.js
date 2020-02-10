import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };
  }

  render() {
    return (
      <form>
        <label htmlFor="task">New Todo</label>

        <input type="text" placeholder="new todo" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
