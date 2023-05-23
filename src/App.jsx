import React, { useState } from 'react';

import './styles/style.scss';

// components
import CreatToDo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  /*
  {
    id: UUIDV4,
    name: string,
    message: string,
    done: boolean
  }
  */
  console.log(todos);
  return (
    <div className="todo-app">
      <div className="container">
        <div className="todo-app-inner">
          <div className="todo-header">
            <CreatToDo todos={todos} setTodos={setTodos} />
          </div>
          <div className="todo-body">
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
