import { lazy } from "react";

import { Container } from "react-bootstrap";
import { AboutMainContainer } from "../styles/AboutStyles";

const AboutMain = lazy(() => import("../components/aboutComponents/AboutMain"));

const About: React.FC = () => {
  return (
    <>
      <AboutMainContainer id="about">
        <Container>
          <AboutMain />
        </Container>
      </AboutMainContainer>
    </>
  );
};

export default About;
