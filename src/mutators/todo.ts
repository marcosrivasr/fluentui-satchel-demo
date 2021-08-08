import { mutator } from "satcheljs";
import { addTodo, completeTodo, deleteTodo } from "../actions/todo";
import getStore from "../store/store";

mutator(addTodo, (actionMessage) => {
  let store = getStore();
  const item = {
    key: Math.random().toString(),
    name: actionMessage.title,
    completed: false,
  };
  store.items = [...store.items, item];
});

mutator(completeTodo, (actionMessage) => {
  let store = getStore();
  const key = actionMessage.key;

  const index = store.items.findIndex((x) => x.key === key);
  const todo = store.items[index];
  todo.completed = !todo.completed;
});

mutator(deleteTodo, (actionMessage) => {
  let store = getStore();
  const key = actionMessage.key;

  const index = store.items.findIndex((x) => x.key === key);
  store.items.splice(index, 1);
});
