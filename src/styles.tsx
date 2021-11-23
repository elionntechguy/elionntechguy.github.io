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

export const BgDiv = styled.div`
  background: url(${bg});
`;

export const HomeMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

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
