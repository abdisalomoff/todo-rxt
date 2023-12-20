import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo } from "../slices/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.list);

  console.log(todoList);

  return (
    <ul className="list-group mt-5 w-75 mx-auto">
      {todoList.map((todo)=>(
        <li key={todo.id} className="list-group-item primary d-flex justify-content-between align-items-center">
            <p className="m-0">{todo.name}</p>
            <p className="fs-10 text-success m-0 ms-auto me-5">{todo.createAt}</p>
            <button onClick={()=> dispatch(deleteTodo(todo.id))} className="btn btn-danger ms-5">delete</button>
            
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
