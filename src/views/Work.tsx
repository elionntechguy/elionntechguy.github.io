import { Container, Card, Row, Col, Button } from "react-bootstrap";

import mbajdistancen from "../assets/mbajdistancenproj.jpg";
import exploreculture from "../assets/exploreculture.jpg";
import accepted from "../assets/accepted.jpg";
import wwwsafe from "../assets/wwwsafe.jpg";
import customerdb from "../assets/customerdb.jpg";

import { WorkMainContainer } from "../styles";

export const Work = () => {
  return (
    <>
      <WorkMainContainer>
        <Container>
          <div className="work-intro">
            <h1>Projects</h1>
          </div>
          <div className="project-cards">
            <Row xs={1} md={3} className="g-4">
              <Col>
                <Card>
                  <Card.Img variant="top" src={customerdb} />
                  <Card.Body>
                    <Card.Title>customerDB</Card.Title>
                    <Card.Text>
                      Customer database built with Rails, React, Redux, and
                      PostgreSQL.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={exploreculture} />
                  <Card.Body>
                    <Card.Title>exploreCulture</Card.Title>
                    <Card.Text>
                      exploreCulture is a website dedicated to the Albanian
                      Culture through the most innovative and up-to-date methods
                      of the 21st century.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={accepted} />
                  <Card.Body>
                    <Card.Title>Accepted</Card.Title>
                    <Card.Text>
                      This is a project with a vision for the future where it
                      sees that the only solution for a better future Is
                      diversity and the unification of all.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={wwwsafe} />
                  <Card.Body>
                    <Card.Title>wwwsafe</Card.Title>
                    <Card.Text>
                      People that are being cyber-bullied or that are threatened
                      online, can report to www.safe and www.safe reports to the
                      government agencies that deal with this sort of problem.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="work-end">
              <a href="https://github.com/elionntechguy" target="_blank">
                & more
              </a>
            </div>
          </div>
        </Container>
      </WorkMainContainer>
    </>
  );
};
