import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

function AddInput(props) {
  const { isInputShow, addItem } = props,
    inputRef = useRef();
  const submitValue = (e) => {
    e.preventDefault();

    let inputValue = inputRef.current.value.trim();

    if (!inputValue) {
      return;
    } else {
      addItem(inputValue);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      {isInputShow ? (
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formAddInput">
              <Form.Label>Add To-Do</Form.Label>
              <Form.Control
                ref={inputRef}
                type="text"
                placeholder="Enter to-do"
              />
              {/* <Form.Text className="text-muted">Please add to-do</Form.Text> */}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitValue}>
              Add
            </Button>
          </Form>
        </Container>
      ) : null}
    </>
  );
}

export default AddInput;
