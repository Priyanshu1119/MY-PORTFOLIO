// NAVBAR.JSX - TOP NAVIGATION BAR COMPONENT

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import linkedinIcon from "../assets/img/nav-icon1.svg";
import leetcodeIcon from "../assets/img/nav-icon2.svg";
import emailIcon from "../assets/img/nav-icon4.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <div
            className="navbar-brand"
            style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}
          >
            Priyanshu Dubey
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>

            {/* Resume link styled differently */}
            {/* <Nav.Link
              href="https://drive.google.com/file/d/17RdBmrbctWkaTUOYmF5jLwesQMsE1_Pu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
              style={{
                border: "1px solid white",
                borderRadius: "20px",
                padding: "6px 16px",
                marginLeft: "15px",
                color: "white",
                fontWeight: "500",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "white", e.target.style.color = "#000")}
              onMouseOut={(e) => (e.target.style.background = "transparent", e.target.style.color = "white")}
            >
              Resume
            </Nav.Link> */}
          </Nav>

          {/* Social icons and Connect button */}
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/priyanshu-dubey-423a17255/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://leetcode.com/u/Priyanshu_Dubey369/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={leetcodeIcon} alt="LeetCode" />
              </a>
              {/* <a href="mailto:priyanshudubey2026@gmail.com">
                <img src={emailIcon} alt="Email" />
              </a> */}
            </div>

            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
