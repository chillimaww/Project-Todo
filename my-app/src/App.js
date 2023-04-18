import React, { useState } from "react";
import { TextFields, Button, TextField } from "@mui/material";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Terminar la ToDo", "Bañarse"]);

  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h2> ToDo List App </h2>
      <form>
        <TextField
          id="outlined-basic"
          label="Make Todo"
          variant="outlined"
          style={{ margin: "0px 5px0" }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
