import "./App.css";

import { Stack } from "@fluentui/react";
import DetailList from "./components/detailList";
import TodoForm from "./components/todoForm";

import { observer } from "mobx-react";

export default observer(() => {
  return (
    <div className="App">
      <TodoForm />
      <Stack>
        <DetailList />
      </Stack>
    </div>
  );
});
