import { Nav, Container } from "react-bootstrap";

import { TransparentNav } from "../styles";

export const NavigationBar = () => {
  return (
    <>
      <TransparentNav fixed="top" expand="lg" variant="light" bg="light">
        <Container fluid>
          <TransparentNav.Brand href="#">e</TransparentNav.Brand>
          {/* <TransparentNav.Toggle />
          <TransparentNav.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#">about</Nav.Link>
              <Nav.Link href="#">work</Nav.Link>
              <Nav.Link href="#">contact</Nav.Link>
            </Nav>
          </TransparentNav.Collapse> */}
        </Container>
      </TransparentNav>
    </>
  );
};
