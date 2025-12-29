import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I am a Computer Science Engineering student who enjoys turning ideas into
  simple and useful software solutions. I like learning new technologies
  and improving my problem-solving skills step by step.
  <br />
  <br />
  I have basic to intermediate knowledge of
  <i>
    <b className="purple">
      {" "}
      C, Java, Python, HTML, CSS, and JavaScript{" "}
    </b>
  </i>
  and I am comfortable working with both programming and web technologies.
  <br />
  <br />
  I am especially interested in building
  <i>
    <b className="purple">
      {" "}
      Web Applications and Software Projects{" "}
    </b>
  </i>
  that are easy to use and solve real-world problems.
  <br />
  <br />
  I enjoy creating projects using
  <b className="purple"> Java </b> and web frameworks like{" "}
  <i>
    <b className="purple">React.js </b>
  </i>
   and I am always excited to learn more.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
