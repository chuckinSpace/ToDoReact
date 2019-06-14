import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
function ToDoList(props) {
  const todos = props.todos.map(todo => {
    return (
      <Paper>
        <ListItem>
          <ListItemText>{todo.task}</ListItemText>
        </ListItem>
        <Divider />
      </Paper>
    );
  });
  return <div>{todos}</div>;
}

export default ToDoList;
