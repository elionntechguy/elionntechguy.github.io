import { WorkButtonMain } from "../../styles/HomeStyles";

const HomeMain: React.FC = () => {
  return (
    <>
      <div className="intro">
        <h1 className="intro-title">
          Hi, I'm <span>Elion</span>.
        </h1>
        <h1 className="intro-desc">I'm a full stack web developer.</h1>
        <div className="intro-btn">
          <WorkButtonMain href="#about">
            View my work <i className="bi bi-arrow-down"></i>
          </WorkButtonMain>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
