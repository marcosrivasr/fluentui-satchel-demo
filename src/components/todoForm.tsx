import * as React from "react";
import { PrimaryButton, TextField, Stack, ITextField } from "@fluentui/react";
import { addTodo } from "../actions/todo";

export default function TodoForm() {
  const [title, setTitle] = React.useState<string>("");
  let titleRef = React.useRef<ITextField>();

  function handleChangeTitle(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setTitle((event.target as HTMLInputElement).value);
  }

  const setTitleFieldRef = (textField: ITextField) => {
    titleRef.current = textField;
  };

  function handleAddTodo(e) {
    e.preventDefault();
    if (title === "") return;
    addTodo(title);
    setTitle("");

    if (titleRef.current) {
      (titleRef.current as ITextField).focus();
    }
  }

  return (
    <Stack horizontal>
      <Stack.Item grow>
        <form onSubmit={handleAddTodo}>
          <TextField
            componentRef={setTitleFieldRef}
            onChange={handleChangeTitle}
            value={title}
          />
        </form>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton text="Add Todo" onClick={handleAddTodo} />
      </Stack.Item>
    </Stack>
  );
}
