import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shivam Gupta</span>{" "}
            from <span className="purple">Ghaziabad, Uttar Pradesh, India</span>.
            <br />
            I’m currently pursuing my{" "}
            <span className="purple">
              Bachelor of Technology in Computer Science
            </span>{" "}
            at <span className="purple">KIET Group of Institutions</span>.
            <br />
            I have a strong interest in{" "}
            <span className="purple">
              Software Development and Full Stack Web Development
            </span>
            , with a solid foundation in Data Structures, OOP, and core CS
            concepts.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA Problems 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Web Projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Tech Events 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistently learning and building to become a better engineer
            every day."
          </p>
          <footer className="blockquote-footer">Shivam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
