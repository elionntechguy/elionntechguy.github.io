import { Row, Col, Card } from "react-bootstrap";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import nodejs from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import python from "../../assets/python.svg";
import django from "../../assets/django.svg";
import mysql from "../../assets/mysql.svg";
import postgres from "../../assets/postgresql.svg";
import rails from "../../assets/rails.svg";

const AboutMain: React.FC = () => {
  return (
    <>
      <div className="about-greeting">
        <h1 className="about-title">Hi, I'm Elion.</h1>
        <h4 className="about-subtitle">Nice to meet you.</h4>
      </div>
      <div className="about-info">
        <Row>
          <Col md={6}>
            My interest in coding started in 2018, <br />
            i started to learn HTML & CSS, then <br /> JavaScript.
            <br />
            <br />
            When i’m not on the computer 💻, i’m <br /> watching TV Shows, or if
            it’s snowing, <br /> then skiing! ⛷️
          </Col>
          <Col md={6}>
            <div className="skills-card">
              <Card>
                <Card.Body>
                  <Card.Title>Skills</Card.Title>
                  <div className="skills-icons">
                    <Row>
                      <Col>
                        <a href="https://reactjs.org/">
                          <img src={react} alt="react" />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://redux.js.org/">
                          <img src={redux} alt="redux" />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://nodejs.org/">
                          <img src={nodejs} alt="nodejs" />
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <a href="https://expressjs.com/">
                          <img src={express} alt="express" />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://www.python.org/">
                          <img src={python} alt="python" />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://www.djangoproject.com/">
                          <img src={django} alt="django" />
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <a href="https://www.mysql.com/">
                          <img src={mysql} alt="mysql" />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://www.postgresql.org/">
                          <img src={postgres} alt="postgres" />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://rubyonrails.org/">
                          <img src={rails} alt="rails" />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutMain;
