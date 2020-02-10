import React, { Component } from 'react';
import '../styles/Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false, task: this.props.task };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleUpdate(event) {
    event.preventDefault();

    this.props.updateTodo(this.props.id, this.state.task);

    this.setState({ isEditing: false });
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            className={this.props.completed ? 'completed' : ''}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
