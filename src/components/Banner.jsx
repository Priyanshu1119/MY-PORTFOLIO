// BANNER.JSX - HOMEPAGE INTRODUCTION SECTION

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

import headerImg from "../assets/img/header-img.svg";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import instagramIcon from "../assets/img/insta-icon.svg";
import githubIcon from "../assets/img/nav-icon3.svg";

import "animate.css";
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "DSA Enthusiast", "CSE Undergrad"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to My World</span>
                  <h1>
                    {`Hi! I'm Priyanshu `}
                    <span className="wrap">{text}</span>
                  </h1>

                  <p>
                    I’m a Computer Science undergrad at G.L.A University, passionate
                    about building scalable full-stack applications. I enjoy solving
                    complex problems using React, Node.js, Next.js and improving my
                    data structures & algorithms.
                  </p>

                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/priyanshu-dubey-423a17255/" target="_blank">
                      <img src={linkedinIcon} alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/Priyanshu1119" target="_blank">
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>

                  <a href="#connect">
                    <button className="vvd">
                      <span>Let’s Connect</span> <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" loading="lazy" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};  