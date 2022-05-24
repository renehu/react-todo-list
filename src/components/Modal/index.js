import React from "react";
import { Modal, Button } from "react-bootstrap";

function TodoModal(props) {
  const { show, data } = props;

  console.log(data);

  return show && data ? (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">To-Do</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h6>Time: {new Date(data.id).toString()}</h6>
        <p>Event: {data.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  ) : null;
}
export default TodoModal;
