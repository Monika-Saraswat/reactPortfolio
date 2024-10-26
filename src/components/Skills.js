import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import java from "../assests/img/java.png";
import react from "../assests/img/reactbg (1).png";
import css from "../assests/img/css.png";
import python from "../assests/img/python.png";
import mongodb from "../assests/img/mongodb.png";
import vscode from "../assests/img/vscode.png";
import git from "../assests/img/git.png";
import ejs from "../assests/img/ejs.png";
import postman from "../assests/img/postman.png";
import node from "../assests/img/node.png";
import html from "../assests/img/html.png";
import js from "../assests/img/js.png";
import tailwind from "../assests/img/tailwind.png";
import bootstrap from "../assests/img/bootstrap.png";
import mysql from "../assests/img/mysql.png";
import express from "../assests/img/express.jpg";
import colorsharp from "../assests/img/color-sharp.png";

const Skills = () => {
  const skills = [
    { src: java, alt: "Java" },
    { src: python, alt: "Python" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: js, alt: "JavaScript" },
    { src: mongodb, alt: "MongoDB" },
    { src: express, alt: "Express" },
    { src: react, alt: "React" },
    { src: node, alt: "Node.js" },
    { src: ejs, alt: "EJS" },
    { src: git, alt: "Git" },
    { src: postman, alt: "Postman" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: vscode, alt: "VS Code" },
    { src: mysql, alt: "MySQL" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
            <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__bounce" : ""}>
              <h2>Skills</h2>
              </div>
        )}
        </TrackVisibility>
        <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__jello" : ""}>
              <p>Explore my tech stack: MERN, Java, SQL – building efficient, scalable solutions with a focus on performance and user experience.</p>
              </div>
        )}
        </TrackVisibility>
              <Row>
                {skills.map((skill, index) => (
                  <Col xs={4} md={4} lg={3} key={index}>
                    <TrackVisibility>
                      {({ isVisible }) => (
                        <div className={isVisible ? "animate__animated animate__swing " : ""}>
                          <img src={skill.src} alt={skill.alt} />
                        </div>
                      )}
                    </TrackVisibility>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorsharp} alt="Decoration" />
    </section>
  );
};

export default Skills;
