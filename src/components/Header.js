import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{backgroundColor:'transparent'}}>
        <Container fluid>
          <Nav variant="link">
              <h3>LOGO</h3>
          </Nav>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '80px',paddingLeft:'50px'}}
            >
              <Button variant="light">HOME</Button>
              <Button variant="light">ABOUT US</Button>
              <Button variant="light">CONTACT</Button>
              <Button variant="light">SERVICES</Button>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav style={{paddingLeft:'50px'}}>
              <Button variant="light">SIGN UP</Button>
              <Button variant="light">LOGIN</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;