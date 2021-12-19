import styled from "styled-components";

import bg from "../assets/what-the-hex.webp";

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
    color: ${({ theme }) => theme.color.black};
  }

  .intro-title {
    font-weight: bold;
  }

  .intro-title > span {
    color: #ff8f00;
  }

  .intro-desc {
    color: ${({ theme }) => theme.color.darkblue};
  }

  .intro-btn {
    display: flex;
    justify-content: center;
  }
`;

export const WorkButtonMain = styled.a`
  text-decoration: none;
  background-color: transparent;
  margin-top: 15px;
  border: 1px solid ${({ theme }) => theme.color.orange};
  padding: 5px 20px 5px 20px;
  color: ${({ theme }) => theme.color.orange};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.orange};
  }
`;
