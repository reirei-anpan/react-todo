import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [inconpleteTodos, setInconpleteTodos] = useState([]);

  const [conpleteTodos, setconpleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inconpleteTodos, todoText];
    setInconpleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inconpleteTodos];
    newTodos.splice(index, 1);
    setInconpleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inconpleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...conpleteTodos, inconpleteTodos[index]];
    setInconpleteTodos(newIncompleteTodos);
    setconpleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newBackTodos = [...conpleteTodos];
    newBackTodos.splice(index, 1);

    const newIncompleteTodos = [...inconpleteTodos, conpleteTodos[index]];
    setconpleteTodos(newBackTodos);
    setInconpleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        todos={inconpleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo todos={conpleteTodos} onClickBack={onClickBack} />
    </>
  );
};
