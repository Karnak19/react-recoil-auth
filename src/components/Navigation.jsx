import React, { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { user as userAtom } from "../recoil/atoms";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useRecoilValue(userAtom);

  const toggle = () => setIsOpen((state) => !state);
  return (
    <Navbar color="primary" dark expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" activeClassName="font-weight-bold">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/admin" activeClassName="font-weight-bold">
              admin
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <img className="img-fluid" src={user.avatar} alt={user.email} style={{ maxHeight: 40 }} />
    </Navbar>
  );
}

export default Navigation;
