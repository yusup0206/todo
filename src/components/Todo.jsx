import React from 'react';

const Todo = ({ task, category }) => {
  const deleteTodo = (e) => {
    setTodos(() => todo.filter((todo) => todo !== e));
  };

  return (
    <div className="todo">
      <div className="todo-text">
        <h2>{task}</h2>
        <p>Status: {category}</p>
      </div>
      <div className="todo-btns">
        <button>Completed</button>
        <button
          onClick={(e) => {
            deleteTodo(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
