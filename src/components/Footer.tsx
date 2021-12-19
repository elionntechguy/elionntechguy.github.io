import { Row, Col } from "react-bootstrap";

import { FooterContainer } from "../styles/FooterStyles";

import resume from "../assets/elion-resume.pdf";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="footer-main">
        <Row>
          <Col>
            <div className="footer-introtext">
              <span>&copy; Elion Shkololli 2021</span>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="footer-download-cv">
            <a href={resume} target="_blank" rel="noopener noreferrer" download>
              download my cv
            </a>
          </div>
        </Row>
        <Row>
          <Col>
            <div className="footer-social-icons">
              <a href="https://twitter.com/elionntechguy">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://github.com/elionntechguy">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </FooterContainer>
  );
};
