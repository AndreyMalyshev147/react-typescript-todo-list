import React, { FC, useContext } from 'react';
import { TodosContext } from "../TodosContext/TodosContext";

import { ITodos } from "../../types/ITodos";

type Props = {
  todo: ITodos
};

export const TodosItem: React.FC<Props> = ({ todo }) => {
  const { todos, setTodos } = useContext(TodosContext);

  const removeTask = (id: number) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const handleToggle = (id: number) => {
    setTodos([
      ...todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo };
      })
    ])
  }

  return (
    <div className="todoitem__container">
      <div className="todoitem__content">
        <div className="todoitem__check-mark">
          <label>
            <input type="checkbox" id={`todo-${todo.id}`} onClick={() => handleToggle(todo.id)} />
            <span className={ todo.completed ? "todoitem__title--completed" : "todoitem__title"}>
              {todo.title}
            </span>
          </label>
        </div>
      </div>
      <div className="todoitem__delete" onClick={() => removeTask(todo.id)} />
    </div>
  );
};
