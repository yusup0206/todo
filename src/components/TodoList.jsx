import React from 'react';

// components
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos?.length > 0 ? (
        todos.map((todo) => (
          <Todo task={todo.task} category={todo.category} key={todo.id} />
        ))
      ) : (
        <span>No todos</span>
      )}
    </div>
  );
};

export default TodoList;
