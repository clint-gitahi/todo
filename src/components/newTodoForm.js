import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state);

    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>

        <input
          type="text"
          placeholder="new todo"
          name="task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
