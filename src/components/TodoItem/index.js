import React, { useReducer } from "react";
import { ListGroup, Form, ButtonGroup, Button } from "react-bootstrap";

function TodoItem(props) {
  const { data, setModalShow, setId } = props;

  const [checked, toggle] = useReducer((checked) => !checked, data.isCompleted);

  if (data) {
    return (
      <>
        <ListGroup.Item
          key={data.id}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={checked} onChange={toggle} />
          </Form.Group>

          <div className="ms-2 me-auto">{data.content}</div>

          <ButtonGroup aria-label="">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setModalShow(true);
                setId(data.id);
              }}
            >
              View
            </Button>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                setModalShow(true);
                setId(data.id);
              }}
            >
              Edit
            </Button>
            <Button variant="danger" size="sm">
              Delete
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </>
    );
  }
}

export default TodoItem;
