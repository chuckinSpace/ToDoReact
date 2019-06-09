import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function App() {
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
    </Paper>
  );
}

export default App;
