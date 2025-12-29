import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser"; 
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x00zftn",   
        "template_9op5rfi",  
        form.current,
        "Mu-3_aiqVxR3uSiFF"  
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <Container>
        <Row>

          {/* ================= LEFT SIDE ================= */}
          <Col md={5} className="contact-left">
            <div className="contact-left-center">

              <div className="contact-info-block">
                <div className="contact-item">
                  <div className="icon-circle">
                    <MdLocationOn />
                  </div>
                  <div className="contact-text">
                    <h5>Address</h5>
                    <p>West Bengal, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle">
                    <MdPhone />
                  </div>
                  <div className="contact-text">
                    <h5>Phone</h5>
                    <p>+91 8391956862</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle">
                    <MdEmail />
                  </div>
                  <div className="contact-text">
                    <h5>Email</h5>
                    <p>laskarrahul2002@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-block">
                <h5>Connect with me</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>

            </div>
          </Col>

          {/* ================= RIGHT SIDE ================= */}
          <Col md={7} className="contact-right">
            <h2 className="contact-title">Get in Touch</h2>

            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </Form.Group>

              <Button type="submit" className="contact-btn">
                Send Message
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;
