import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              I’m a Computer Science undergraduate and aspiring Software Engineer
              who enjoys building clean, scalable, and user-focused applications.
              Currently pursuing my B.Tech in Computer Science at KIET Group of
              Institutions, Ghaziabad.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C++, JavaScript, Python, SQL, and HTML/CSS{" "}
                </b>
              </i>
              and have a strong foundation in Data Structures, Object-Oriented
              Programming, and core computer science fundamentals.
              <br />
              <br />
              My key interests include developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications{" "}
                </b>
              </i>
              and creating impactful products that solve real-world problems.
              <br />
              <br />
              I love building projects using
              <b className="purple"> React.js </b> and
              <i>
                <b className="purple"> Node.js</b> with{" "}
                <b className="purple">Express.js</b>
              </i>
              , backed by databases like MongoDB and MySQL.
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
