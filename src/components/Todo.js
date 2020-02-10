import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false, task: this.props.task };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
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

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    console.log(this.state);
    let result;

    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
