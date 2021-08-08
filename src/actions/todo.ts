import { action } from "satcheljs";

export let addTodo = action("ADD_TODO", (title: string) => ({ title: title }));

export let completeTodo = action("COMPLETE_TODO", (key: string) => ({ key }));

export let deleteTodo = action("DELETE_TODO", (key: string) => ({ key }));
