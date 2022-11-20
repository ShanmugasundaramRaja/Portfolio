import { Container, Row, Col, Image } from "react-bootstrap";
import "../Css/Projects.css";
import image from "../Assets/Web capture_17-11-2022_113913_localhost.jpeg";
import Linkedin from "../Assets/Web capture_20-11-2022_181550_localhost.jpeg";
import Spotify from "../Assets/Spotify_pic.png";
import Netflix from "../Assets/Web capture_20-11-2022_182332_localhost.jpeg";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <Container fluid>
          <h2 className="latest-projects">Latest Projects</h2>
          <Row>
            <Col className="projects-div">
              <div className="pro">
                <div className="disflex project-info">
                  <div className="project_name">
                    <h4 className="pro-data">Globetrotter</h4>
                  </div>
                  <div className="project_time">
                    <h4 className="pro-data">November, 2022</h4>
                  </div>
                </div>
                <div className="img-wrapper">
                  <a
                    href="https://github.com/ShanmugasundaramRaja/capstone"
                    target="_blank"
                  >
                    <Image
                      src={image}
                      alt="FoodMood Image"
                      className="foodmood"
                    />
                  </a>
                </div>
              </div>

              <div className="pro">
                <div className="disflex project-info ">
                  <div className="project_name">
                    <h4 className="pro-data">LinkedIn Clone</h4>
                  </div>
                  <div className="project_time">
                    <h4 className="pro-data">July, 2022</h4>
                  </div>
                </div>
                <div className="img-wrapper">
                  <a
                    href="https://github.com/Artifiction1/LinkedIn"
                    target="_blank"
                  >
                    <Image
                      src={Linkedin}
                      alt="Linkedin Image"
                      className="foodmood"
                    />
                  </a>
                </div>
              </div>

              <div className="disflex project-info">
                <div className="project_name">
                  <h4 className="pro-data">Spotify Clone</h4>
                </div>
                <div className="project_time">
                  <h4 className="pro-data">June, 2022</h4>
                </div>
              </div>
              <div className="img-wrapper">
                <a
                  href="https://github.com/ShanmugasundaramRaja/spotify-redux-benchmark"
                  target="_blank"
                >
                  <Image
                    src={Spotify}
                    alt="Spotify Image"
                    className="foodmood"
                  />
                </a>
              </div>
              <div className="disflex project-info">
                <div className="project_name">
                  <h4 className="pro-data">Netflix Clone</h4>
                </div>
                <div className="project_time">
                  <h4 className="pro-data">June, 2022</h4>
                </div>
              </div>
              <div className="img-wrapper">
                <a
                  href="https://github.com/ShanmugasundaramRaja/netflixapi"
                  target="_blank"
                >
                  <Image
                    src={Netflix}
                    alt="Netflix Image"
                    className="foodmood"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
