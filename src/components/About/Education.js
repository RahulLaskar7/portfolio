import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <Container fluid className="education-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>

        <div className="education-timeline">

          {/* ===== BTECH ===== */}
          <Row className="edu-row">
            <Col md={6} className="edu-box left">
              <div className="edu-card">
                <h4 className="purple">BTech in CSE</h4>
                <p>Tchno Main Salt Lake, Kolkata</p>
                <span>2023 – 2027</span>
              </div>
            </Col>

            <Col md={6} className="edu-center">
              <div className="edu-icon">
                <FaUniversity />
              </div>
            </Col>
          </Row>

          {/* ===== HIGHER SECONDARY ===== */}
          <Row className="edu-row">
            <Col md={6} className="edu-center">
              <div className="edu-icon">
                <FaUniversity />
              </div>
            </Col>

            <Col md={6} className="edu-box right">
              <div className="edu-card">
                <h4 className="purple">Higher Secondary</h4>
                <p>Kotulpur High School, Kotulpur, Bankura</p>
                <span>2020 – 2022</span>
              </div>
            </Col>
          </Row>

          {/* ===== SECONDARY ===== */}
          <Row className="edu-row">
            <Col md={6} className="edu-box left">
              <div className="edu-card">
                <h4 className="purple">Secondary</h4>
                <p>Ramakrishna Mission Sarada Vidyapith, Joyrambati, Bankura</p>
                <span>2014 – 2020</span>
              </div>
            </Col>

            <Col md={6} className="edu-center">
              <div className="edu-icon">
                <FaUniversity />
              </div>
            </Col>
          </Row>

        </div>
      </Container>
    </Container>
  );
}

export default Education;
