import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteTodo, uptadeStatus } from "../slices/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.list);

  console.log(todoList);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate.replace(/\//g, "-");
  };

  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoValue, setEditTodoValue] = useState("");

  const handleEditButtonClick = (id, name) => {
    setEditTodoId(id);
    setEditTodoValue(name);
  };

  const handleEditInputChange = (e) => {
    setEditTodoValue(e.target.value);
  };

  const handleEditSaveClick = () => {
    if (editTodoValue.trim() !== "") {
      dispatch(uptadeStatus(editTodoId, editTodoValue));
      setEditTodoId(null);
      setEditTodoValue("");
    }
  };

  return (
    <TableContainer
      component={Paper}
      className="max-w-full mx-auto mt-8 border-gray container"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Done</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>
                {editTodoId === todo.id ? (
                  <TextField
                    value={editTodoValue}
                    onChange={handleEditInputChange}
                    autoFocus
                  />
                ) : (
                  todo.name
                )}
              </TableCell>
              <TableCell>{formatDate(todo.createDate)}</TableCell>
              <TableCell>{todo.isDone ? "done" : "undone"}</TableCell>
              <TableCell className="d-flex gap-3">
                {editTodoId === todo.id ? (
                  <Button onClick={handleEditSaveClick}>Save</Button>
                ) : (
                  <Button
                    onClick={() => handleEditButtonClick(todo.id, todo.name)}
                  >
                    <FaEdit size={18} color="green"/>
                  </Button>
                )}
                <Button onClick={() => dispatch(deleteTodo(todo.id))}>
                  <MdDelete  size={20} color="red" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoList;
