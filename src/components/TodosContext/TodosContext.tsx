import React, { useEffect, useState } from 'react';

import { ITodos, IContext } from "../../types/ITodos";

export const TodosContext = React.createContext<IContext>({
  todos: [],
  setTodos: () => {},
  userInput: '',
  setUserInput: () => {},
  activeTasksCounter: 0,
  setActiveTasksCounter: () => {},
});

export const TodoProvider: React.FC<any> = ({ children }) => {
  const [todos, setTodos] = useState<ITodos[]>(JSON.parse(localStorage.getItem('todos') || '[]'));
  const [userInput, setUserInput] = useState<string>('');
  const [activeTasksCounter, setActiveTasksCounter] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

    let tasksCounter = document.querySelectorAll('.todoitem__check-mark label input:not(:checked)').length;

    setActiveTasksCounter(tasksCounter);

  }, [todos, activeTasksCounter]);

  const contextValue: IContext = {
    todos,
    setTodos,
    userInput,
    setUserInput,
    activeTasksCounter,
    setActiveTasksCounter
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  )
}
