import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        addTodo(inputValue);
        setInputValue('');
      }
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="What do you need to do?"
    />
  );
};

export default TodoInput;
