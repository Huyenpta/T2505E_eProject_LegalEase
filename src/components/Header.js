import { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../App.css"; // đảm bảo bạn đã import CSS

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm py-2 header-navbar">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand
            href="#"
            className="fw-bold d-flex align-items-center"
            style={{ fontSize: "1.4rem", color: "#1a237e" }}
          >
            ⚖️ <span className="ms-1 text-warning">Legal</span>
            <span style={{ color: "#1a237e" }}>Ease</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-3">
              <Nav.Link href="#" className="text-dark fw-semibold">
                Explore LegalEase ▼
              </Nav.Link>
              <span className="border-end mx-1" style={{ height: "20px" }}></span>
              <Nav.Link href="#" className="text-dark fw-semibold">
                Log In
              </Nav.Link>
              <FaSearch
                size={18}
                style={{ cursor: "pointer", color: "#1a237e" }}
                onClick={() => setShowSearch(!showSearch)}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Box hiển thị khi click icon */}
      {showSearch && (
        <div className="search-bar-container text-center py-3 bg-light shadow-sm">
          <Container>
            <Form className="d-flex justify-content-center">
              <FormControl
                type="search"
                placeholder="Search lawyers, categories..."
                className="me-2 w-50"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
