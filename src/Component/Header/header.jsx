import React from 'react';
import './header.css';
import { Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';
import IMAGE from '../../Constant/const';


function header() {
  return (
    <div className='gs-headerbanner'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="light">            
            <Container>
                <Navbar.Brand href="#home">
                    <img src={ IMAGE.BRANDLOGO } />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className="ms-auto">
                        <Nav.Link href="#deets" className="">
                            HOME
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="">
                            ABOUT US
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Item 1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Item 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Item 3
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Item 4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown title="INDUSTRIAL" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Item 1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Item 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Item 3
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Item 4
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="">
                            PORTFOLIO
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className="">
                            CAREER
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="text-white">
                            <Button variant="warning gs-borderradius-25">GET STARTED</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default header