import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      time: new Date().toLocaleString(),
      message: formData.message,
    };

    const res = await emailjs.send(
      "service_nxxkih2", // your service ID
      "template_zhxhxng", // your template ID
      templateParams,
      "uSVLJKAcMW5LB0CpS" // your public key
    );

    setStatus("Message sent successfully!");
    setFormData({
      firstName: "", lastName: "", email: "", phone: "", message: ""
    });
  } catch (err) {
    console.error(err);
    setStatus("Failed to send message");
  }
};

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone No."
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button type="submit"><span>Send</span></button>
                </Col>
              </Row>
              {status && (
                <p style={{ marginTop: "1rem", color: "green" }}>{status}</p>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
