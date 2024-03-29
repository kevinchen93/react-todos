import React, { Component } from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo } />
      )
    );

    return (
      <div>
        <TodoForm receiveTodo={ receiveTodo }/>
        <ul className="todo-list">
          { todoItems }
        </ul>
      </div>
    );
  }
}

export default TodoList;
