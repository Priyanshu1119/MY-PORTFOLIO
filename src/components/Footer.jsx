// src/components/Footer.jsx
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer merged-footer">
      <Container>
        <Row className="align-items-center justify-content-between g-3">
          {/* Left: PD gradient circle */}
          <Col xs="auto">
            <div className="footer-logo-circle">PD</div>
          </Col>

          {/* Right: matching gradient info pill */}
          <Col xs={12} md className="d-flex justify-content-md-end">
            <div className="footer-gradient-blurb">
              Building fast, secure, and scalable web apps—frontend to full‑stack.
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom bar: year + made with */}
      <div className="footer-bottom-bar">
        <Container className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <small className="mb-0">
            © {year} Priyanshu Dubey. All Rights Reserved.
          </small>
          <small className="mb-0">
            Made with React, Vite, React‑Bootstrap, and Animate.css
          </small>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
