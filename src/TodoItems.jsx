import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>X</button>
    </li>
  );
};

export default TodoItem;
