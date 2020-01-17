import React, { useState } from "react";
import "./Styles/Nav.css";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar color="light" light expand="md">
        <Link to="/">Brand</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="links" navbar>
            <NavItem className="lists">
              <Link to="/"> Home</Link>
            </NavItem>
            <NavItem className="lists">
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem className="lists">
              <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem className="lists">
              <Link to="/addposts">AddPosts</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
