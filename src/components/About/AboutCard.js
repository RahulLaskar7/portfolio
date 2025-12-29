import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">RAHUL LASKAR</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I am currently a{" "}
            <span className="purple">Computer Science Engineering student</span>{" "}
            at <span className="purple">Techno Main Salt Lake</span>.
            <br />
            I am in my{" "}
            <span className="purple">3rd year</span> and actively learning
            programming, software development, and core computer science
            concepts.
            <br />
            <br />
            Apart from coding, I enjoy spending time on activities that help me
            relax and stay motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos & Tutorials 📘
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Thinking every day to become a better engineer."
          </p>
          <footer className="blockquote-footer">Rahul Laskar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
