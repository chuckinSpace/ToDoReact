import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ToDoList from "./ToDoList";

function App() {
  const initialTodos = [
    {
      id: 1,
      task: "Walk the dog",
      completed: false
    },
    {
      id: 2,
      task: "The second one",
      completed: true
    },
    {
      id: 3,
      task: "The Third one",
      completed: false
    }
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backroundColor: "fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </ToolBar>
      </AppBar>
      <ToDoList todos={todos} />
    </Paper>
  );
}

export default App;
