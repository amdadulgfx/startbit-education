import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        // this is nav bar
        <nav className='sticky-top'>

            <Navbar bg='primary' expand="lg" sticky="top" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">StartBit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className='fw-bold text-decoration-none text-white pe-2'>HOME</NavLink>
                            <NavLink to="/courses" className='fw-bold text-decoration-none text-white pe-2' >COURSES</NavLink>
                            <NavLink to="/about" className='fw-bold text-decoration-none text-white pe-2' >ABOUT</NavLink>
                            <NavLink to="/demos" className='fw-bold text-decoration-none text-white pe-2' >DEMOS</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search Courses"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;