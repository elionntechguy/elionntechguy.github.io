import { lazy } from "react";

import { Container } from "react-bootstrap";

import { ContactMainContainer } from "../styles/ContactStyles";

const ContactMain = lazy(
  () => import("../components/contactComponents/ContactMain")
);

const Contact: React.FC = () => {
  return (
    <>
      <ContactMainContainer id="contact">
        <Container>
          <ContactMain />
        </Container>
      </ContactMainContainer>
    </>
  );
};

export default Contact;
