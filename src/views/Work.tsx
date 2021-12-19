import { lazy } from "react";

import { Container } from "react-bootstrap";

import { WorkMainContainer } from "../styles/WorkStyles";

const WorkCards = lazy(() => import("../components/workComponents/WorkCards"));

const Work: React.FC = () => {
  return (
    <>
      <WorkMainContainer id="work">
        <Container>
          <WorkCards />
        </Container>
      </WorkMainContainer>
    </>
  );
};

export default Work;
