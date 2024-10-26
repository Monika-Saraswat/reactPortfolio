import React from "react";
import { Container } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import rlpkd from "../assests/img/rlpkd.jpg";
import gla from "../assests/img/gla.jpg";
import TrackVisibility from "react-on-screen";

export default function App() {
  return (
    <Container className="skill element" id="education">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__bounce" : ""}>
            <h2 style={{ padding: "20px" }}>Education</h2>
          </div>
        )}
      </TrackVisibility>
      <MDBContainer fluid className="py-2 skill-bx mb-8 ">
        <div className="main-timeline-2">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeInLeft" : ""
                }
              >
                <div className="timeline-2 left-2">
                  <MDBCard>
                    <MDBCardImage
                      src={rlpkd}
                      alt="Responsive image"
                      position="top"
                    />
                    <MDBCardBody className="p-4">
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__bounce"
                                : ""
                            }
                          >
                            <h4 className="fw-bold mb-4">
                              Secondary Education
                            </h4>
                          </div>
                        )}
                      </TrackVisibility>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__rubberband"
                                : ""
                            }
                          >
                            <p className="text-muted mb-4">
                              <MDBIcon far icon="clock" /> 2018-2019
                            </p>
                          </div>
                        )}
                      </TrackVisibility>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__flash"
                                : ""
                            }
                          >
                            <h6 className="fw-bold mb-4">
                              Ratan Lal Phool Katori Devi Sr. Sec. School,
                              Mathura
                            </h6>
                            <p className="mb-0">
                              In Class 10, I excelled in Mathematics, Science,
                              Social Science, Sanskrit, English, and IT, earning
                              a score of 97.6%.
                            </p>
                          </div>
                        )}
                      </TrackVisibility>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            )}
          </TrackVisibility>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeInRight" : ""
                }
              >
                <div className="timeline-2 right-2">
                  <MDBCard>
                    <MDBCardImage
                      src={rlpkd}
                      alt="Responsive image"
                      position="top"
                    />
                    <MDBCardBody className="p-4">
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__bounce"
                                : ""
                            }
                          >
                            <h4 className="fw-bold mb-4">
                              Senior Secondary Education
                            </h4>
                          </div>
                        )}
                      </TrackVisibility>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__rubberBand"
                                : ""
                            }
                          >
                            <p className="text-muted mb-4">
                              <MDBIcon far icon="clock" /> 2020-2021
                            </p>
                          </div>
                        )}
                      </TrackVisibility>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__flash"
                                : ""
                            }
                          >
                            <h6 className="fw-bold mb-4">
                              Ratan Lal Phool Katori Devi Sr. Sec. School,
                              Mathura
                            </h6>
                            <p className="mb-0">
                              In Class 12, I completed my studies in Physics,
                              Chemistry, Mathematics, English, and Sanskrit,
                              attaining a score of 95.8%.
                            </p>
                          </div>
                        )}
                      </TrackVisibility>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            )}
          </TrackVisibility>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeInLeft" : ""
                }
              >
                <div className="timeline-2 left-2">
                  <MDBCard>
                    <MDBCardImage
                      src={gla}
                      alt="Responsive image"
                      position="top"
                    />
                    <MDBCardBody className="p-4">
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__bounce"
                                : ""
                            }
                          >
                            <h4 className="fw-bold mb-4">
                              B.Tech in Computer Science and Engineering
                            </h4>
                          </div>
                        )}
                      </TrackVisibility>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__rubberBand"
                                : ""
                            }
                          >
                            <p className="text-muted mb-4">
                              <MDBIcon far icon="clock" /> 2021-Continuing
                            </p>
                          </div>
                        )}
                      </TrackVisibility>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__flash"
                                : ""
                            }
                          >
                            <h6 className="fw-bold mb-4">
                              GLA University, Mathura
                            </h6>
                            <p className="mb-0">
                              I am currently pursuing my B.Tech program,
                              engaging in advanced studies of Data Structures
                              and Algorithms, Database Management Systems, Web
                              Development, and Operating Systems, with a CGPA of
                              8.75.
                            </p>
                          </div>
                        )}
                      </TrackVisibility>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </MDBContainer>
    </Container>
  );
}
