import { Container, Button } from "react-bootstrap";

import { NavigationBar } from "../components/NavigationBar";

import { BgDiv, HomeMainContainer, WorkButtonMain } from "../styles";

export const Home = () => {
  return (
    <BgDiv>
      <NavigationBar />
      <Container>
        <HomeMainContainer>
          <div className="intro">
            <h1 className="intro-title">
              Hi, I'm <span>Elion</span>
            </h1>
            <h1 className="intro-desc">I'm a full stack web developer.</h1>
            <div className="intro-btn">
              <WorkButtonMain>
                View my work <i className="bi bi-arrow-down"></i>
              </WorkButtonMain>
            </div>
          </div>
        </HomeMainContainer>
      </Container>
    </BgDiv>
  );
};
