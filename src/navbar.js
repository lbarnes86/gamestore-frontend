import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarApp(props) {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand className="logo-link" href="/">
          <h1 className="logo">
          Game Store
          </h1>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link className="nav-link" eventKey={2} as={Link} to="/games">
              Games
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey={2} as={Link} to="/consoles">
              Consoles
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey={2} as={Link} to="/tshirts">
              T-Shirts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
