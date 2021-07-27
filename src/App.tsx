import "./App.css";
import { useState } from "react";

import {
  PartialTheme,
  getTheme,
  ThemeProvider,
  DefaultButton,
  createTheme,
  PrimaryButton,
  DefaultPalette,
  TextField,
  Stack,
} from "@fluentui/react";
import List from "./components/list";
import TodoForm from "./components/todoForm";

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const [isLight, setIsLight] = useState(true);

  const myThemeLight = createTheme({
    palette: {
      themePrimary: "#5fd400",
      themeLighterAlt: "#f8fdf3",
      themeLighter: "#e2f8d0",
      themeLight: "#caf2a9",
      themeTertiary: "#99e55c",
      themeSecondary: "#70d91a",
      themeDarkAlt: "#56be00",
      themeDark: "#48a100",
      themeDarker: "#357700",
      neutralLighterAlt: "#faf9f8",
      neutralLighter: "#f3f2f1",
      neutralLight: "#edebe9",
      neutralQuaternaryAlt: "#e1dfdd",
      neutralQuaternary: "#d0d0d0",
      neutralTertiaryAlt: "#c8c6c4",
      neutralTertiary: "#a19f9d",
      neutralSecondary: "#605e5c",
      neutralPrimaryAlt: "#3b3a39",
      neutralPrimary: "#323130",
      neutralDark: "#201f1e",
      black: "#000000",
      white: "#ffffff",
    },

    effects: {
      elevation8: "0 0 2px 0 rgba(0,0,0,0.24), 0 4px 8px 0 rgba(0,0,0,0.28)",
    },
  });

  const palette = getTheme();

  const myThemeDark = createTheme({
    palette: {
      themePrimary: "#24a4ff",
      themeLighterAlt: "#01070a",
      themeLighter: "#061a29",
      themeLight: "#0b314d",
      themeTertiary: "#156299",
      themeSecondary: "#1f90e0",
      themeDarkAlt: "#3aadff",
      themeDark: "#58baff",
      themeDarker: "#84ccff",
      neutralLighterAlt: "#3c3c3c",
      neutralLighter: "#444444",
      neutralLight: "#515151",
      neutralQuaternaryAlt: "#595959",
      neutralQuaternary: "#5f5f5f",
      neutralTertiaryAlt: "#7a7a7a",
      neutralTertiary: "#c8c8c8",
      neutralSecondary: "#d0d0d0",
      neutralPrimaryAlt: "#dadada",
      neutralPrimary: "#ffffff",
      neutralDark: "#f4f4f4",
      black: "#f8f8f8",
      white: "#333333",
    },
    semanticColors: {
      menuBackground: palette.palette.neutralPrimaryAlt,
    },

    effects: {
      elevation8:
        " 0px 4px 8px rgba(0, 0, 0, 0.28), 0px 0px 2px rgba(0, 0, 0, 0.24)",
    },
  });

  const lightTheme: PartialTheme = {
    semanticColors: {
      bodyBackground: "white",
      bodyText: "black",
    },
    effects: {
      elevation8: "0 0 10px red",
    },
  };

  const darkTheme: PartialTheme = {
    semanticColors: {
      bodyBackground: "#333",
      bodyText: "white",
      menuBackground: "#444",
    },
    effects: {
      elevation8: "0 0 10px rgba(0,0,0,0.4), 0 0 10px rgba(0,0,0,0.4)",
    },
  };

  return (
    <div className="App">
      <TodoForm />
      <Stack>
        <List />
      </Stack>
    </div>
  );
}

export default App;
