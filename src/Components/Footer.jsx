import "../Css/Footer.css";
import { Image } from "react-bootstrap";
import mypic from "../Assets/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="main-footer-div disflex" id="contact">
      <div className="first-div">
        <Image src={mypic} alt="mypic" className="me" />

        <h5 className="myname">Shanmugasundaram Raja</h5>
        <p className="frontend-dev">Frontend Developer</p>

        <p className="email-text">Email me at</p>
        <h5 className="email">shanmusinbox@icloud.com</h5>
      </div>
      <div className="second-div">
        <h1>Let's Connect!</h1>

        <p className="footer-text">
          I am always open to discuss & improve your online presence or help
          with your UX/UI design challenges.
        </p>

        <div className="icons-container">
          <a
            href="https://www.linkedin.com/in/shanmugasundaram-raja-938b9a244/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
          <a href="https://github.com/ShanmugasundaramRaja" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
