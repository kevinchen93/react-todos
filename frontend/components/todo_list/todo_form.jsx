import { uniqueId } from '../../util/id_generator'
import React, { Component } from 'react';

import merge from 'lodash/merge';

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
    const todo = merge({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
