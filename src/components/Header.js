import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import basket from '../images/basket6.png';
import logo from '../images/logo1.png';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div>
        <Navbar className='bgColor' expand="lg">
      <Container fluid>
        <img src={logo} alt='logo' className='smallImage'/>
        <Navbar.Brand><b>Five Star Store</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='Links'>Home</Link>
            <Link to="details" className='Links'>Details</Link>
            <Link to="carts" className='Links'>cart</Link>
          </Nav>
          <img src={basket} alt="basket" className='smallImage'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
