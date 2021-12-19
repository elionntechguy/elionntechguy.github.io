import { Card, Row, Col } from "react-bootstrap";

import mbajdistancen from "../../assets/mbajdistancenproj.webp";
import exploreculture from "../../assets/exploreculture.webp";
import accepted from "../../assets/accepted.webp";
import wwwsafe from "../../assets/wwwsafe.webp";
import customerdb from "../../assets/customerdb.webp";

import rails from "../../assets/rails.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import postgres from "../../assets/postgresql.svg";

import nodejs from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";

import django from "../../assets/django.svg";

import { CardSeeMore, BuiltWith } from "../../styles/WorkStyles";

const WorkCards: React.FC = () => {
  return (
    <>
      <div className="work-intro">
        <h1>Projects</h1>
      </div>
      <div className="project-cards">
        <Row xs={1} lg={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={customerdb} />
              <Card.Body>
                <Card.Title>customerDB</Card.Title>
                <Card.Text>
                  Customer database built with Rails, React, Redux, and
                  PostgreSQL.
                </Card.Text>
                <CardSeeMore>
                  <a
                    href="https://github.com/elionntechguy/railsdbproject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    see more <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </CardSeeMore>
                <BuiltWith>
                  <a href="https://rubyonrails.org/">
                    <img src={rails} alt="rails" />
                  </a>
                  <a href="https://reactjs.org/">
                    <img src={react} alt="react" />
                  </a>
                  <a href="https://redux.js.org/">
                    <img src={redux} alt="redux" />
                  </a>
                  <a href="https://www.postgresql.org/">
                    <img src={postgres} alt="postgreSQL" />
                  </a>
                </BuiltWith>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={mbajdistancen} />
              <Card.Body>
                <Card.Title>Mbaj Distancen</Card.Title>
                <Card.Text>
                  Mbaj Distancen App is a COVID-19 Statistics Web App that
                  fetches data from Mbaj Distancen API for Kosovo.
                </Card.Text>
                <CardSeeMore>
                  <a
                    href="https://elionntechguy.github.io/mbajdistancenapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    see more <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </CardSeeMore>
                <BuiltWith>
                  <a href="https://reactjs.org/">
                    <img src={react} alt="react" />
                  </a>
                  <a href="https://nodejs.org/">
                    <img src={nodejs} alt="nodejs" />
                  </a>
                  <a href="https://expressjs.com/">
                    <img src={express} alt="express" />
                  </a>
                </BuiltWith>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={exploreculture} />
              <Card.Body>
                <Card.Title>exploreCulture</Card.Title>
                <Card.Text>
                  exploreCulture is a website dedicated to the Albanian Culture
                  through the most innovative and up-to-date methods of the 21st
                  century.
                </Card.Text>
                <CardSeeMore>
                  <a
                    href="https://github.com/elionntechguy/exploreculture"
                    target="_blank"
                    rel="noreferrer"
                  >
                    see more <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </CardSeeMore>
                <BuiltWith>
                  <a href="https://www.djangoproject.com/">
                    <img src={django} alt="django" />
                  </a>
                  <a href="https://reactjs.org/">
                    <img src={react} alt="react" />
                  </a>
                </BuiltWith>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={accepted} />
              <Card.Body>
                <Card.Title>Accepted</Card.Title>
                <Card.Text>
                  This is a project with a vision for the future where it sees
                  that the only solution for a better future Is diversity and
                  the unification of all.
                </Card.Text>
                <CardSeeMore>
                  <a
                    href="https://github.com/elionntechguy/accepted"
                    target="_blank"
                    rel="noreferrer"
                  >
                    see more <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </CardSeeMore>
                <BuiltWith>
                  <a href="https://www.djangoproject.com/">
                    <img src={django} alt="django" />
                  </a>
                </BuiltWith>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={wwwsafe} />
              <Card.Body>
                <Card.Title>www.safe</Card.Title>
                <Card.Text>
                  People that are being cyber-bullied or that are threatened
                  online, can report to www.safe, and www.safe reports to the
                  government agencies that deal with this sort of problem.
                </Card.Text>
                <CardSeeMore>
                  <a
                    href="https://github.com/elionntechguy/www.safe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    see more <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </CardSeeMore>
                <BuiltWith>
                  <a href="https://www.djangoproject.com/">
                    <img src={django} alt="django" />
                  </a>
                </BuiltWith>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="work-end">
        <a
          href="https://github.com/elionntechguy"
          target="_blank"
          rel="noreferrer"
        >
          & more
        </a>
      </div>
    </>
  );
};

export default WorkCards;
