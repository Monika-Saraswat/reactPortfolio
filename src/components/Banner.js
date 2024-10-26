import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import colorsharp from "../assests/img/color-sharp.png";
import me from "../assests/img/MonikaPort.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = [
    "Web Developer",
    "Software Developer",
    "Coder",
    "Inquisitive",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Fixed Math.random()
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <h1>
                  <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    {`Hi I'm Monika Saraswat`}
                    </div>
              )}
              </TrackVisibility>
                    <span className="wrap text-border-gradient">{text}</span>
                  </h1>
                  <p>
                    Hi, I’m Monika, a passionate full-stack developer currently
                    pursuing a degree in Computer Science Engineering at GLA
                    University. With a strong foundation in both frontend and
                    backend development, I have experience in building dynamic
                    applications using modern technologies like Node.js,
                    React.js, and MongoDB. My curiosity and love for
                    problem-solving drive me to create efficient and intuitive
                    solutions that enhance user experiences.
                    <br />
                    <br />I thrive in fast-paced environments and enjoy tackling
                    new challenges that push the boundaries of my skills. My
                    active engagement on platforms like LeetCode, where I've
                    solved over 350 problems, reflects my commitment to
                    continuous learning and improvement. I believe in the
                    transformative power of technology and am eager to
                    contribute my skills to projects that make a meaningful
                    impact. Whether it’s designing a responsive UI or developing
                    a secure backend, I am dedicated to delivering high-quality
                    solutions that exceed expectations.
                  </p>
                  <a
                    className="tagline"
                    href="/MonikaR.pdf"
                    download
                  >
                    Download CV
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
            <img className="" src={me} alt="Monika" />
            </div>)}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
