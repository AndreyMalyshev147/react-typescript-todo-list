import React from 'react';

import { TodoProvider } from "./components/TodosContext/TodosContext";
import { TodosApp } from "./components/TodosApp";

import './App.scss';

function App() {
  return (
    <TodoProvider>
      <TodosApp />
    </TodoProvider>
  );
}

export default App;
