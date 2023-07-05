import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComp = () => {
 
    

      return (
        <Navbar expand="md" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand href="#">Logo Antsar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link  className='me-4'href="#action1">Home</Nav.Link>
                <Nav.Link  className='me-4'href="#action2">Shop</Nav.Link>
                <Nav.Link className='me-4' href="#action2">About Us</Nav.Link>
                <Nav.Link className='' href="#action2">Contact</Nav.Link>



                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}

                
              </Nav>


              <Nav>
            <Nav.Link href="#deets">cart</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             login
            </Nav.Link>
          </Nav>

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}

            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
   
    
}

export default NavbarComp