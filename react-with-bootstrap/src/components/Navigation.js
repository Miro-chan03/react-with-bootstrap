import React from "react";
import { Navbar, Nav, Button, Container} from "react-"
import styled from "styled-components";

const Styles = styled.div`
 a,
 .navbar-brand,
 .navbar-nav .nav-link {
     color:cyan;
    }
 }
`;




function Navigation() {
    return (
        <>
        <Styles>
            <Navbar callapseOnSelect expand "lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.brand>logo</Navbar.brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.link>
                                <Link to="">Home</Link>
                            </Nav.link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
     </>
  );
}


export default Navigation;