import React, { Component } from 'react';

import { uniqueId } from '../../util/id_generator.js'

class TodoForm extends Component {
  state = {
    title: "",
    body: "",
    done: false
  };

  update = (property) => {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const todo = { ...this.state, id: uniqueId() };
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Todo
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="go on a hike"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Description
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="google directions and invite friends"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
