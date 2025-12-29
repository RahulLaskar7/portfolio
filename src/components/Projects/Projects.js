import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cms from "../../Assets/Projects/cms.png";
import kisankart from "../../Assets/Projects/kisankart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="College-Management-System"
              description="College Management System is a web-based application designed to manage students, teacher, courses, and academic activities. It is built using HTML, CSS, and JavaScript, and provides features such as student registration, course management, academic notice, and easy access to academic information through a user-friendly interface."
              ghLink="https://github.com/RahulLaskar7/College-Management-System"
              demoLink="https://college-management-system-nu-amber.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kisankart}
              isBlog={false}
              title="Kisankart"
              description="KisanKart is an online agricultural marketplace designed to empower farmers. It allows them to list crops, access real-time market prices, connect with trusted buyers, and receive secure payments without middlemen."
              ghLink="https://github.com/RahulLaskar7/kisankart.git"
              demoLink="https://kisankart-ten.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
