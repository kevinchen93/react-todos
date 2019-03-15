import React, { Component } from 'react';

import { uniqueId } from '../../util/id_generator'

class StepForm extends Component {
  state = {
    title: "",
    body: "",
    done: false,
    todo_id: this.props.todo_id
  }

  update = (property) => {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const step = { ...this.state, id: uniqueId() };
    this.props.receiveStep(step);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="step-form" onSubmit={ this.handleSubmit }>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            placeholder="walk to store"
            onChange={ this.update('title') }
            required />
        </label>
        <br />
        <label>Description:
          <input
            className="input"
            ref="body"
            value={ this.state.body }
            placeholder="google store directions"
            onChange={ this.update('body') }
            required />
        </label>
        <br />
        <button className="create-button">Create Step!</button>
      </form>
    );
  }
}

export default StepForm;
