import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ecommerce from "../assests/img/ecp.png";
import coffee from "../assests/img/home-img.jpeg";
import dinehub from "../assests/img/dinehub.jpg";
import blog from "../assests/img/blog.jpg";

const Project = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const projects = [
    {
      image: dinehub,
      title: "DineHub",
      github: "https://github.com/Muskangupta2507/Food_Aggregator",
    },
    {
      image: ecommerce,
      title: "Ecommerce Website",
      github: "https://github.com/Monika-Saraswat/e-commerce",
      liveDemo: "https://e-commerce-gly1.onrender.com/",
    },
    {
      image: coffee,
      title: "Coffee Website",
      github: "https://github.com/Monika-Saraswat/cafeClone",
      liveDemo: "https://firstcafeclone.netlify.app",
    },
    {
      image: blog,
      title: "Blog Website",
      github: "https://github.com/yourusername/dinehub",
      liveDemo: "https://github.com/yourusername/dinehub",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible ? "animate__animated animate__bounce" : ""
                        }
                      >
                        <h2>Projects</h2>
                      </div>
                    )}
                  </TrackVisibility>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible ? "animate__animated animate__jello" : ""
                        }
                      >
                        <p>
                          Exploring Possibilities: Projects that Reflect My
                          Learning Journey.
                        </p>
                      </div>
                    )}
                  </TrackVisibility>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    className="skill-slider"
                  >
                    {projects.map((project, index) => (
                      <div className="item" key={index}>
                        <div className="project-image">
                          <img src={project.image} alt={project.title} />
                          <div className="overlay">
                            <h5>{project.title}</h5>
                            <div className="button-group">
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn b">GitHub</a>
                              {project.liveDemo && (
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn b">Live Demo</a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
