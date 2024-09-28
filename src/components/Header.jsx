import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      expand="md"
      data-bs-theme="dark"
      className="bg-transparent shadow-none py-0"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img width={90} src={logo} alt="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-2">
            <Nav.Link className="fs-5" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fs-5" href="#link">
              Solution
            </Nav.Link>
            <Nav.Link className="fs-5" href="#link">
              Pricing
            </Nav.Link>
            <Nav.Link className="fs-5" href="#link">
              Blog
            </Nav.Link>
            <Nav.Link className="fs-5" href="#link">
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto gap-2">
            <Button className="loginBtn">Login</Button>
            <Button className="registerBtn">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
