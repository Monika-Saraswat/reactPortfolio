import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";
import navIcon2 from "../assests/img/leetcode.png";
import Logo from "../assests/img/Logo__2_-removebg-preview.png";
import navIcon4 from "../assests/img/github.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function BasicExample() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScroll] = useState(false);
  const onUpdateLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="#home">
                <img src={Logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    href="#home"
                    className={
                      activeLink == "home"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => {
                      onUpdateLink("home");
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#education"
                    className={
                      activeLink == "education"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => {
                      onUpdateLink("education");
                    }}
                  >
                    Education
                  </Nav.Link>
                  <Nav.Link
                    href="#skills"
                    className={
                      activeLink == "skills"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => {
                      onUpdateLink("skills");
                    }}
                  >
                    Skills
                  </Nav.Link>
                  <Nav.Link
                    href="#projects"
                    className={
                      activeLink == "projects"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => {
                      onUpdateLink("projects");
                    }}
                  >
                    Projects
                  </Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/monikasaraswat15/">
                      <img src={navIcon1} alt="" />
                    </a>
                    <a href="https://leetcode.com/u/Monika1509/">
                      <img src={navIcon2} alt="" />
                    </a>
                    <a href="https://www.instagram.com/_monikasaraswat_15/">
                      <img src={navIcon3} alt="" />
                    </a>
                    <a href="https://github.com/Monika-Saraswat">
                      <img src={navIcon4} alt="" />
                    </a>
                  </div>
                  <button
                    className="vvd"
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span>Let's Connect</span>
                  </button>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )}
    </TrackVisibility>
  );
}

export { BasicExample as NavBar };
