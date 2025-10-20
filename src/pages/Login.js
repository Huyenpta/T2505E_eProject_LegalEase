import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <>
    <Header/>
    
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      {/* ĐÃ TĂNG CHIỀU RỘNG CARD LÊN 32rem ĐỂ CHỨA CÁC NÚT SOCIAL LOGIN */}
      <Card style={{ width: '32rem', padding: '2.5rem 2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h4 className="text-center mb-5 fw-bold text-dark" style={{ letterSpacing: '1px' }}>LOG IN</h4>
          
          {/* Social Login Buttons - SỬ DỤNG CÁC ĐIỀU CHỈNH KÍCH THƯỚC NHỎ HƠN */}
          <Row className="mb-4 g-3">
            {/* Google Button */}
            <Col xs={6}>
                <Button 
                    variant="outline-danger" 
                    // Giữ py-2
                    className="d-flex align-items-center justify-content-center py-2 w-100" 
                    // GIỮ CỠ CHỮ 0.8rem
                    style={{ fontWeight: 'bold', fontSize: '0.8rem' }} 
                >
                    <FaGoogle className="me-2" size={18} /> 
                    LOGIN WITH GOOGLE
                </Button>
            </Col>
            
            {/* LinkedIn Button */}
            <Col xs={6}>
                <Button 
                    variant="outline-primary" 
                    // Giữ py-2
                    className="d-flex align-items-center justify-content-center py-2 w-100" 
                    // GIỮ CỠ CHỮ 0.8rem
                    style={{ fontWeight: 'bold', fontSize: '0.8rem', borderColor: '#0a66c2', color: '#0a66c2' }}
                >
                    <FaLinkedinIn className="me-2" size={18} /> 
                    LOGIN WITH LINKEDIN
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
            {/* Email hoặc Tên Tài khoản */}
            <Form.Group className="mb-3" controlId="formUserIdentifier">
              <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>EMAIL HOẶC TÊN TÀI KHOẢN</Form.Label>
              <Form.Control type="text" placeholder="Nhập email hoặc tên tài khoản" size="md" /> 
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold text-secondary" style={{ fontSize: '0.9rem' }}>PASSWORD</Form.Label>
              <Form.Control type="password" size="lg" />
            </Form.Group>

            {/* Remember Me & Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" className="text-muted" />
              </Form.Group>
              <a href="/forgot-password" className="text-info fw-semibold" style={{ fontSize: '0.9rem', color: '#17a2b8' }}>Forgot your password?</a>
            </div>

            {/* Login Button */}
            <div className="d-grid gap-2 mb-4">
              <Button 
                variant="info" 
                type="submit" 
                size="lg" 
                className="py-2"
                style={{ backgroundColor: '#17a2b8', borderColor: '#17a2b8', fontWeight: 'bold' }}
              >
                LOGIN
              </Button>
            </div>
          </Form>
          
          {/* Đường phân cách */}
          <div className="mb-4" style={{ borderBottom: '1px solid #e0e0e0' }}></div>
          
          {/* Sign Up Link (Link Đăng ký) */}
          <div className="text-center mt-3">
            <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>Don't have an account yet?</p>
            <a href="/register" className="fw-bold" style={{ color: '#17a2b8', textDecoration: 'none', fontSize: '1rem' }}>SIGN UP NOW</a>
          </div>
        </Card.Body>
      </Card>
    </Container>
    <Footer/>
    </>
  );
}

export default Login;