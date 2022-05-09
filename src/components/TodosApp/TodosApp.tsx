import React, { useContext } from 'react';
import { TodosForm } from "../TodosForm";
import { TodoList } from "../TodoList";
import { TodosContext } from "../TodosContext/TodosContext";

export const TodosApp = () => {
  const { todos, activeTasksCounter } = useContext(TodosContext);

  return (
    <div className="main__container">
      <div className="todos__wrap">
        <div className="todos__title">
          <h1>ToDo List</h1>
        </div>
        <TodosForm/>
        <TodoList />

        {todos.length !== 0 ? (
          <div className="todos__items-count">
            <span>Active tasks: {activeTasksCounter}</span>
            <span>All tasks: {todos.length}</span>
          </div>
        ) : ''}
      </div>
    </div>
  );
};
