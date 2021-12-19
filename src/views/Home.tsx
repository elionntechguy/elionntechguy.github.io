import { lazy } from "react";

import { Container } from "react-bootstrap";
import { BgDiv, HomeMainContainer } from "../styles/HomeStyles";

const HomeMain = lazy(() => import("../components/homeComponents/HomeMain"));

const Home: React.FC = () => {
  return (
    <BgDiv>
      <Container>
        <HomeMainContainer>
          <HomeMain />
        </HomeMainContainer>
      </Container>
    </BgDiv>
  );
};

export default Home;
