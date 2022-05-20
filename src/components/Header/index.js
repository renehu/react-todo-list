import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header(props) {
  const { openInput } = props;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>To-Do List</Navbar.Brand>
          <Nav onClick={openInput} className="justify-content-end">
            <Nav.Link>
              Todo <span>&#43;</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
