import { Container } from "react-bootstrap";

import { TransparentNav } from "../styles/NavBarStyles";

export const NavigationBar: React.FC = () => {
  return (
    <>
      <TransparentNav expand="lg" variant="light" bg="light">
        <Container fluid>
          <TransparentNav.Brand href="#">e</TransparentNav.Brand>
        </Container>
      </TransparentNav>
    </>
  );
};
