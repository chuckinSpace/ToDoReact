import React from "react";
import Paper from "@material-ui/core/Paper";

function ToDoList(props) {
  const todos = props.todos.map(todo => {
    return (
      <Paper>
        <li>{todo.task}</li>
      </Paper>
    );
  });
  return <div>{todos}</div>;
}

export default ToDoList;
