import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Resume Projects
// import elearning from "../../Assets/Projects/elearning.png";
// import mentalHealth from "../../Assets/Projects/mentalhealth.png";

// GitHub Repos
// import jsProject from "../../Assets/Projects/js__project.png";
// import backendExpress from "../../Assets/Projects/backendExpress.png";
// import backendTraining from "../../Assets/Projects/BackendTraining.png";
// import tourEase from "../../Assets/Projects/v0-tourease-landing-page.png";
// import fruitColor from "../../Assets/Projects/fruit-color-predictor.png";
// import devopsInternship from "../../Assets/Projects/MLSAKIET_FWdevops_INTERNSHIP.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A collection of my academic, personal, and learning-based projects.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ===== Resume Projects ===== */}

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={elearning}
              isBlog={false}
              title="E-Learning Website"
              description="A full-stack e-learning platform with interactive lessons, quizzes, and analytics built using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB."
              ghLink="https://github.com/engg-shivamgupta/e-learning-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={mentalHealth}
              isBlog={false}
              title="Mental Health Companion App"
              description="A mental wellness application offering mood tracking, journaling, and curated self-care resources with secure authentication using MERN stack."
              ghLink="https://github.com/engg-shivamgupta/mental-health-companion"
            />
          </Col>

          {/* ===== GitHub Projects ===== */}

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={jsProject}
              isBlog={false}
              title="JavaScript Games"
              description="A collection of JavaScript-based mini games like Tic-Tac-Toe and Rock-Paper-Scissors demonstrating DOM manipulation and game logic."
              ghLink="https://github.com/engg-shivamgupta/js__project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={backendExpress}
              isBlog={false}
              title="Express Backend"
              description="A basic Express.js backend project demonstrating RESTful APIs, routing, and server-side logic."
              ghLink="https://github.com/engg-shivamgupta/backendExpress"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={backendTraining}
              isBlog={false}
              title="Backend Training"
              description="A backend learning repository covering Node.js fundamentals, API development, and database integration."
              ghLink="https://github.com/engg-shivamgupta/BackendTraining"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={tourEase}
              isBlog={false}
              title="TourEase Landing Page"
              description="A responsive landing page built using TypeScript focusing on UI design, layout, and responsiveness."
              ghLink="https://github.com/engg-shivamgupta/v0-tourease-landing-page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={fruitColor}
              isBlog={false}
              title="Fruit Color Predictor"
              description="A simple machine learning project that predicts fruit categories based on RGB values using KNN algorithm."
              ghLink="https://github.com/engg-shivamgupta/fruit-color-predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={devopsInternship}
              isBlog={false}
              title="DevOps Internship Repository"
              description="A forked repository containing DevOps-related tasks, exercises, and learning materials from internship training."
              ghLink="https://github.com/engg-shivamgupta/MLSAKIET_FWdevops_INTERNSHIP"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
