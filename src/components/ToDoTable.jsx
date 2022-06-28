import React from "react";
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import "./ToDoTable.css"

// agar dapat menerima props todos maka:
// props.todos

const ToDoTable = (props) => {
  return (
    <Table sx={{maxWidth: 700}}>
      <TableHead>
        <TableRow> 
          <TableCell>ToDo ID</TableCell>
          <TableCell>ToDo Name</TableCell>
          <TableCell>ToDo Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* looping props.todos */}
        {props.todos.map((todo) => {
          return (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.name}</TableCell>
              {/* todo.isCompleted bersifat boolean. maka harus diganti ke string dengan conditional:ternary */}
              <TableCell>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</TableCell>
              {/* untuk action jika tidak selesai muncul button */}
              <TableCell>
                {todo.isCompleted ? (
                  ""
                ) : (
                  <Button variant="outlined" onClick={() => props.fnCompleteTodo(todo.id)}>
                    Selesaikan
                  </Button>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ToDoTable;
