import React, { useState } from "react";
import "./ToDoForm.css";
//menggunakan MUI button
import Button from "@mui/material/Button"
import { TextField } from "@mui/material";

const ToDoForm = (props) => {
    const [inputData, setInputData] = useState("");

    const inputOnChange = (event) => {
        setInputData(event.target.value);
    }
    
    const formOnSubmit = (event) => {
        event.preventDefault();

        props.fnAddTodos(inputData);
        // kosongkan input lagi
        setInputData("");
    }
  return (
    <form className="form" onSubmit={formOnSubmit}>
      <TextField
      type="text"
      id="todoBaru"
      label="input kerjaan baru"
      variant="outlined"
      size="small"
      value={inputData}
      onChange={inputOnChange}></TextField>
      <Button type="submit" id="btn" variant="contained" size="large">Tambah Kerjaan</Button>
    </form>
  );
};

export default ToDoForm;
