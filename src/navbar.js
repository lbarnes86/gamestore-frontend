import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";

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
            <Nav.Link className="nav-link" eventKey={2} href="https://game-store-backend1.herokuapp.com/games">
              Games
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey={2} href="https://game-store-backend1.herokuapp.com/consoles">
              Consoles
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey={2} href="https://game-store-backend1.herokuapp.com/tshirts">
              T-Shirts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
