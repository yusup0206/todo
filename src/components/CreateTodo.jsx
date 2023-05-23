import React, { useState } from 'react';

const CreatToDo = ({ todos, setTodos }) => {
  const [input, setInput] = useState({
    task: '',
    category: '',
  });
  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        setTodos([
          ...todos,
          {
            task: input.task,
            category: input.category,
            id: Math.floor(Math.random() * 10000),
            done: false,
          },
        ]);
        setInput({ task: '', category: '' });
      }}
    >
      <div className="input-group">
        <label htmlFor="task">Task</label>
        <textarea
          rows={5}
          id="task"
          placeholder="Task"
          value={input.task}
          onChange={(e) => setInput({ ...input, task: e.target.value })}
        />
      </div>
      <div className="category">
        <div className="category-group">
          <input
            type="radio"
            id="urgent"
            value="Urgent"
            checked={input.category === 'Urgent'}
            onChange={(e) => setInput({ ...input, category: e.target.value })}
          />
          <label htmlFor="urgent">Urgent</label>
        </div>
        <div className="category-group">
          <input
            type="radio"
            id="notUrgent"
            value="Not Urgent"
            checked={input.category === 'Not Urgent'}
            onChange={(e) => setInput({ ...input, category: e.target.value })}
          />
          <label htmlFor="notUrgent">Not Urgent</label>
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default CreatToDo;
