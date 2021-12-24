import styled from "styled-components";

export const ContactMainContainer = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;

  .contact-intro {
    text-align: center;
  }

  .contact-form {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    form {
      input,
      textarea {
        border-color: ${({ theme }) => theme.color.orange};
      }
      .btn {
        background-color: ${({ theme }) => theme.color.orange};
      }

      .sent-alert {
        margin-top: 15px;
      }
    }
  }
`;
