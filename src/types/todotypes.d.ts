export interface Todo {
  key: string;
  name: string;
  completed: boolean;
}

export interface TodoItems {
  items: Todo[];
}
