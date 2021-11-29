import { Container, Col, Row } from "react-bootstrap";
import SkillBar from "react-skillbars";

import { AboutMainContainer } from "../styles";

const skills: { type: string; level: number }[] = [
  { type: "Python", level: 85 },
  { type: "Javascript", level: 85 },
  { type: "TypeScript", level: 50 },
  { type: "React", level: 85 },
  { type: "RoR", level: 50 },
  { type: "Node.js", level: 70 },
  { type: "Express", level: 70 },
];

export const About = () => {
  return (
    <>
      <AboutMainContainer>
        <Container>
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
                When i’m not on the computer 💻, i’m <br /> watching TV Shows,
                or if it’s snowing, <br /> then skiing! ⛷️
              </Col>
              <Col md={6}>
                <SkillBar skills={skills} />
              </Col>
            </Row>
          </div>
        </Container>
      </AboutMainContainer>
    </>
  );
};
