import styled from "styled-components";

export const AboutMainContainer = styled.div`
  padding-top: 64px;

  .about-greeting {
    text-align: center;
  }

  .about-info {
    margin-top: 10%;
    font-size: 22px;

    .row > * {
      padding: 20px;
    }
  }

  .skills-card {
    text-align: center;
    .card {
      .card-body {
        .card-title {
          font-size: 2rem;
        }
      }
    }
    .skills-icons {
      img {
        // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 48px;
      }
    }
  }
`;
