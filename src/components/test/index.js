import React from "react";
import Button from "react-bootstrap/Button";

function Test(props) {
  const { title, changeTitle } = props;

  return (
    <>
      <h1>{title}</h1>
      <Button
        type="button"
        className="btn btn-primary"
        onClick={() => changeTitle("666")}
      >
        Change Title
      </Button>
    </>
  );
}

export default Test;
