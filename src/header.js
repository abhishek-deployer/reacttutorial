import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/" className='font-weight-bold fs-1'>React Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/hook" className='fs-5'>Hook</Nav.Link>
            <Nav.Link as={Link} to="/link" className='fs-5'>Props</Nav.Link>
            <Nav.Link as={Link} to="/link" className='fs-5'>JSX</Nav.Link>
            <Nav.Link as={Link} to="/link" className='fs-5'>Router</Nav.Link>
            <Nav.Link as={Link} to="/link" className='fs-5'>Redux
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dropdown/item1">Dropdown Item 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown/item2">Dropdown Item 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dropdown/item3">Dropdown Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dropdown/another">Another Item</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
