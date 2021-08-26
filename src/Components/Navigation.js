import React, {Fragment} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';

import { useAuthState, useAuthDispatch, switchTheme} from '../Context'

import { FaUser, FaSignInAlt, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';


function Navigation(props) {

  const dispatch = useAuthDispatch()
  const userDetails = useAuthState()

  const handleThemeChange = async (e) => {
    e.preventDefault();
    let body = document.body;
    let changeTheme = await switchTheme(dispatch, body);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={'fixed-top border-bottom'}>
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#">Blog</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {userDetails.user && (
              <Fragment>
                <LinkContainer to="/dashboard">
                  <Nav.Link><FaUser /></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <Nav.Link><FaSignOutAlt /></Nav.Link>
                </LinkContainer>
              </Fragment>
            )}
            {!userDetails.user && (
              <LinkContainer to="/login">
                <Nav.Link><FaSignInAlt /></Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <a href="#" onClick={handleThemeChange}>
            {userDetails.theme === 'dark' ? <FaSun className={'text-warning'} /> : <FaMoon className={'text-light'} />}
          </a>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
