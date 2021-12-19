import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const TransparentNav = styled(Navbar)`
  margin-bottom: -74px;
  z-index: 1;
  background-color: transparent !important;

  .navbar-brand {
    font-family: "Condiment";
    color: ${({ theme }) => theme.color.orange} !important;
    font-size: 32px !important;
  }

  .nav-link {
    transition: 0.3s;
  }

  .nav-link:hover {
    color: ${({ theme }) => theme.color.orange} !important;
  }
`;
