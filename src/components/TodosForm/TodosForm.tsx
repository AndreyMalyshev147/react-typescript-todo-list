import React, { useContext } from 'react';
import { TodosContext } from "../TodosContext/TodosContext";

import { ITodos } from "../../types/ITodos";

export const TodosForm = () => {
  const { todos, setTodos, userInput, setUserInput } = useContext(TodosContext);

  const addTask = (userInput: string)  => {
    if (userInput) {
      const newItem: ITodos = {
        id: +new Date(),
        title: userInput,
        completed: false
      }

      setTodos([...todos, newItem]);
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const addTaskOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSubmit(e);
  };

  return (
    <div className="todoform__container">
      <form onSubmit={handleSubmit} className="todoform__form">
        <div className="todoform__input">
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Enter a task..."
          />
        </div>
        <div className="todoform__button">
          <button onClick={addTaskOnClick}>Add</button>
        </div>
      </form>
    </div>
  );
};
