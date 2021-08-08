import { createStore } from "satcheljs";
import { TodoItems } from "../types/todotypes";
import { todoItems } from "./todoStore";
import "../mutators/todo";

export default createStore<TodoItems>("TodoItems", todoItems);
