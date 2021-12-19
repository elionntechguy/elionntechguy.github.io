import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border-top: 1px solid ${({ theme }) => theme.color.orange};
  background-color: #fff3cd;

  .row {
    margin: 1rem;
  }

  .footer-download-cv {
    text-align: center;

    a {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  .footer-social-icons {
    font-size: 24px;
    text-align: center;

    a {
      color: #000000;
      margin: 5px;
    }
  }
`;
