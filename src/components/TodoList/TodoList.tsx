import React, { useContext } from 'react';

import { TodosItem } from "../TodosItem";

import { TodosContext } from "../TodosContext/TodosContext";

export const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className={ todos.length === 0 ? "todolist__container empty" : "todolist__container"}>
      {todos.length === 0 ? (
        <div className="todolist__empty-container">
          <span>ToDo List is empty...</span>
        </div>
      ) : (
        <div className="todolist__items">
          {todos.map(todo => (
            <TodosItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      )}
    </div>
  );
};
