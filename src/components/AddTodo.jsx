import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [createDate, setCreateDate] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      return;
    }

    const newTodo = {
      id: new Date().toJSON(),
      name: todo,
      createDate: createDate,
      isDone: false,
      createAt: new Date().toLocaleString(),
    };

    dispatch(addTodo(newTodo));
    setTodo("");
    setCreateDate("")
    e.target.reset();
  };

  return (
    <Container className="my-3">
      <h1 className="text-center fs-3">Todo list</h1>
      <Form onSubmit={handleSubmit} className="container mx-auto d-flex gap-5 align-items-center">
        <Form.Control
          type="text"
          placeholder="Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
          className="w-50 p-2"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}  value={createDate} >
          <DatePicker label="Basic date picker" onChange={(date) => setCreateDate(date.toJSON())} />
          </DemoContainer >
        </LocalizationProvider>
        <Button variant="outlined" type="submit">
          add
        </Button>
      </Form>
    </Container>
  );
};

export default AddTodo;
