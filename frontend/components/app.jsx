import React from 'react';

import TodoListContainer from './todo_list/todo_list_container.js';

const App = () => (
  <div className="app">
    <h1>A Super Awesome Todo List</h1>
    <TodoListContainer />
  </div>
);

export default App;
