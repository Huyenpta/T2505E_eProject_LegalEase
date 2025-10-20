import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa'; // Cần cài đặt react-icons
import Header from '../components/Header'; // Thêm lại import Header
import Footer from '../components/Footer'; // Thêm lại import Footer

function Register() {
  return (
    <>
    {/* Thêm lại Header và Footer để đảm bảo ứng dụng hoạt động đầy đủ */}
    <Header />
    
    <Container className="d-flex justify-content-center" style={{ padding: '3rem 0' }}>
      <Card style={{ width: '40rem', padding: '2.5rem 3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h4 className="text-center mb-5 fw-bold text-dark" style={{ letterSpacing: '1px' }}>SIGN UP AS A CLIENT</h4>
          
          {/* Social Register Buttons - Kiểu dáng gọn gàng như trang Login */}
          <Row className="mb-4 g-3">
            <Col>
              <Button 
                variant="outline-danger" 
                className="d-flex align-items-center justify-content-center py-2 w-100" 
                style={{ fontWeight: 'bold', fontSize: '0.95rem' }}
              >
                <FaGoogle className="me-2" size={18} /> REGISTER WITH GOOGLE
              </Button>
            </Col>
            <Col>
              <Button 
                variant="outline-primary" 
                className="d-flex align-items-center justify-content-center py-2 w-100" 
                style={{ fontWeight: 'bold', fontSize: '0.95rem', borderColor: '#0a66c2', color: '#0a66c2' }}
              >
                <FaLinkedinIn className="me-2" size={18} /> REGISTER WITH LINKEDIN
              </Button>
            </Col>
          </Row>

          {/* Đường phân cách */}
          <div className="my-4 d-flex align-items-center">
            <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#e0e0e0' }}></div>
            <span className="mx-3 text-muted" style={{ fontSize: '0.85rem' }}>HOẶC</span>
            <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#e0e0e0' }}></div>
          </div>
          
          <Form>
            <Row>
              {/* Tên Tài Khoản (Username) */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>Username</Form.Label>
                  <Form.Control type="text" size="md" placeholder="Dùng để đăng nhập" />
                </Form.Group>
              </Col>
              {/* Mật Khẩu (Password) */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>Password</Form.Label>
                  <Form.Control type="password" size="md" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Full Name */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>Full Name</Form.Label>
                  <Form.Control type="text" size="md" />
                </Form.Group>
              </Col>
              {/* City (Thành phố/Tỉnh) - Thay thế Mã Bưu Chính */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>City</Form.Label>
                  <Form.Control type="text" size="md" placeholder="Ví dụ: Ho Chi Minh" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {/* Email Công Việc (Work Email) */}
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formEmailCongViec">
                  <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>Work Email (Tùy chọn)</Form.Label>
                  <Form.Control type="email" size="md" />
                </Form.Group>
              </Col>
            </Row>

            <p className="text-muted" style={{fontSize: '0.9rem'}}>Not located in the Vietnam?</p>

            {/* Radio Buttons (Lawyer vs. Client) - Thêm p-3 và bg-light cho dễ nhìn */}
            <div className="p-3 mb-4 mt-3 rounded" style={{ backgroundColor: '#f5f5f5' }}>
                <Row>
                    <Col md={6}>
                        <Form.Check 
                            type="radio" 
                            label={<span className='fw-bold'>I'm a Lawyer</span>}
                            name="userType" 
                            id="radioLuatSu" 
                            className="mb-1"
                        />
                        <small className="text-muted ms-4">Actively Barred & in Good Standing</small>
                    </Col>
                    <Col md={6}>
                        <Form.Check 
                            type="radio" 
                            label={<span className='fw-bold'>I'm a Client</span>}
                            name="userType" 
                            id="radioKhachHang" 
                            className="mb-1"
                            defaultChecked 
                        />
                        <small className="text-muted ms-4">Seeking Business Legal Services</small>
                    </Col>
                </Row>
            </div>
            
            {/* ReCAPTCHA placeholder - ĐÃ THÊM mx-auto ĐỂ CĂN GIỮA */}
            <div 
                className="mb-4 border p-3 mx-auto" 
                style={{ maxWidth: '300px', backgroundColor: '#f9f9f9' }}
            >
                <Form.Check type="checkbox" label="Tôi không phải là người máy" />
                <div className="mt-2 text-end">
                    <small className="text-muted" style={{fontSize: '0.75rem'}}>reCAPTCHA | <a href="#" style={{color: '#17a2b8'}}>Bảo mật</a> | <a href="#" style={{color: '#17a2b8'}}>Điều khoản</a></small>
                </div>
            </div>

            {/* Register Button */}
            <div className="d-grid gap-2 mb-4">
              <Button 
                variant="info" 
                type="submit" 
                size="lg" 
                className="py-2"
                style={{ backgroundColor: '#17a2b8', borderColor: '#17a2b8', fontWeight: 'bold' }}
              >
                SIGN UP NOW
              </Button>
            </div>
            
            <p className="text-center text-muted" style={{fontSize: '0.8rem'}}>
                By clicking on "Sign Up Now", I agree to and understand the LegalEase 
                <a href="#" className="fw-bold" style={{ color: '#17a2b8' }}> Terms of Use </a> 
                &
                <a href="#" className="fw-bold" style={{ color: '#17a2b8' }}> Privacy Policy.</a>
            </p>

          </Form>

          {/* Đường phân cách */}
          <div className="mb-4 mt-4" style={{ borderBottom: '1px solid #e0e0e0' }}></div>
          
          {/* Login Link (Link Đăng nhập) */}
          <div className="text-center mt-3">
            <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>Already have an account?</p>
            <a href="/login" className="fw-bold" style={{ color: '#17a2b8', textDecoration: 'none', fontSize: '1rem' }}>LOGIN NOW</a>
          </div>
        </Card.Body>
      </Card>
    </Container>
    
    <Footer />
    </>
  );
}

export default Register;