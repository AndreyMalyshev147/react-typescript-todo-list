export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}

export interface IContext {
  todos: ITodos[];
  setTodos: (todos: ITodos[]) => void;
  userInput: string,
  setUserInput: (userInput: string) => void;
  activeTasksCounter: number;
  setActiveTasksCounter: (activeTasksCounter: number) => void;
}