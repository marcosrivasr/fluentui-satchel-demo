import { observer } from "mobx-react";
import getStore from "../store/store";
import { completeTodo, deleteTodo } from "../actions/todo";

export default observer(function List({ item }) {
  function handleChecked(e) {
    completeTodo(item.key);
  }

  function handleRemove(e) {
    deleteTodo(item.key);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed ? true : false}
        onChange={handleChecked}
      />
      {item.name} <button onClick={handleRemove}>Delete</button>
    </div>
  );
});
