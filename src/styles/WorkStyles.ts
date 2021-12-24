import styled from "styled-components";

export const WorkMainContainer = styled.div`
  padding-top: 10rem;

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
    border-color: ${({ theme }) => theme.color.orange};

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
    color: ${({ theme }) => theme.color.orange};
    text-decoration: none;
  }
`;

export const CardSeeMore = styled.div`
  text-align: right;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.orange};

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
