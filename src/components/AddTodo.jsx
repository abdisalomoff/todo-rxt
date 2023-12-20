import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      return;
    }

    const newTodo = {
      id: new Date().toJSON(),
      name: todo,
      isDone: false,
      createAt: new Date().toLocaleString(),
    };

    dispatch(addTodo(newTodo));
    setTodo("");
    e.target.reset();
  };

  return (
   <>
   <h1 className="text-center fs-3 my-3">Todo list</h1>
   <Form onSubmit={handleSubmit} className="w-50 mx-auto d-flex gap-3">
      <Form.Control
        type="text"
        placeholder="Todo"
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <Button variant="success" className="w-25" type="submit">
        add
      </Button>
    </Form>
   </>
  );
};

export default AddTodo;
