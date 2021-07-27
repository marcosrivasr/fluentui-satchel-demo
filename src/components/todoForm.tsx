import * as React from "react";
import { PrimaryButton, TextField, Stack } from "@fluentui/react";

export default function TodoForm() {
  const [title, setTitle] = React.useState<string>();

  function handleChangeTitle(
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) {
    setTitle((event.target as HTMLInputElement).value);
  }

  return (
    <Stack horizontal>
      <Stack.Item grow>
        <TextField onChange={handleChangeTitle} />
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton text="Add Todo" value={title} />
      </Stack.Item>
    </Stack>
  );
}
