import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import { Typography } from "@mui/material";

const ToDo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "DOM", isCompleted: true },
    { id: 2, name: "Mulai React", isCompleted: false },
    { id: 3, name: "Component React", isCompleted: false },
  ]);

  // buat fungsi untuk menambah todos/list nya
  const addTodos = (namaTodoYangBaru) => {
      // logic untuk mencari id yang terbaru
      const newId = todos[todos.length - 1].id + 1;

      const objTodoYangBaru = {
        id: newId,
        name: namaTodoYangBaru,
        isCompleted: false,
      };

      const todosYangBaru = [...todos, objTodoYangBaru];
      setTodos(todosYangBaru);
    };
  // fungsi saat list di todosnya selesei (memencet tombol selesaikan)
    const completedTodo = (idTodo) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === idTodo) {
          todo.isCompleted = true;
        }
        return todo;
      });
      //nge set statenya lagi
      setTodos(newTodos);
    };

  return (
    <>
      <Typography variant="h4" component="h4">Aplikasi ToDo</Typography>
      <div>
        {/* lempar fungsi ke component via props */}
        <ToDoForm fnAddTodos={addTodos}/>
        {/* lempar todos ke todotable, menggunakan props */}
        <ToDoTable todos={todos} fnCompleteTodo={completedTodo}/>
      </div>
    </>
  );
};

export default ToDo;
