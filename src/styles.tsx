import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import bg from "./assets/what-the-hex.png";

const black: string = "#0A0A0A";
const darkblue: string = "#141C3A";
const orange: string = "#FF8F00";

export const TransparentNav = styled(Navbar)`
  background-color: transparent !important;

  .navbar-brand {
    font-family: "Condiment";
    color: ${orange} !important;
    font-size: 32px !important;
  }

  .nav-link {
    transition: 0.3s;
  }

  .nav-link:hover {
    color: ${orange} !important;
  }
`;

// Clip-path Background
export const BgDiv = styled.div`
  position: relative;

  &::before {
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${bg});
    clip-path: polygon(32% 0%, 63% 100%, 99% 100%, 100% 0);
  }
`;

export const HomeMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .intro {
    text-align: center;
    color: ${black};
  }

  .intro-title {
    font-weight: bold;
  }

  .intro-title > span {
    color: #ff8f00;
  }

  .intro-desc {
    color: ${darkblue};
  }

  .intro-btn {
    display: flex;
    justify-content: center;
  }
`;

export const WorkButtonMain = styled.button`
  background-color: transparent;
  margin-top: 15px;
  border: 1px solid ${orange};
  padding: 5px 20px 5px 20px;
  color: ${orange};
  transition: 0.3s;

  &:hover {
    color: ${black};
    background-color: ${orange};
  }
`;

export const AboutMainContainer = styled.div`
  height: 120vh;

  margin-top: 64px;

  .about-info {
    margin-top: 10%;
    font-size: 22px;

    .row > * {
      padding: 20px;
    }
  }

  .about-greeting {
    text-align: center;
  }
`;

export const WorkMainContainer = styled.div`
  height: 100vh;

  .work-intro {
    text-align: center;
  }

  .project-cards {
    padding: 16px;
  }

  .col {
    display: flex;
    justify-content: center;
  }

  .row {
    justify-content: center;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.5rem;
    border-color: ${orange};

    img {
      border-radius: 6.5px;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .work-end {
    text-align: center;
  }

  .work-end > a {
    color: ${orange};
    text-decoration: none;
  }
`;

export const CardSeeMore = styled.div`
  text-align: right;
  a {
    text-decoration: none;
    color: ${orange};

    i {
      margin-left: 1px;
      font-size: 15px;
    }
  }
`;

export const BuiltWith = styled.div`
  margin-top: 20px;
  text-align: center;

  img {
    margin: 5px;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 48px;
  }
`;
