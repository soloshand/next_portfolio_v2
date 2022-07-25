import Link from 'next/link';
import Image from 'next/image';
import {Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { navLinks } from "../../../../data/navigation"
import { useRouter } from "next/router"

export default function NavBar() {

    const router = useRouter();
    return (
        
        <div className='fixed-top bg-dark text-white'>
            <Navbar id="nav-wrap" expand="lg" className="mx-background-top-linear" variant="dark">
                <Container fluid>
                    <Navbar.Toggle data-toggle="collapse" data-target="#navbarresponsive" aria-controls="navbarresponsive" />
                    <Navbar.Collapse id="navbarresponsive">
                        <Nav className="m-auto"
                            navbarresponsive={+true}
                        >
                        {navLinks.map((link, index) => {
                            return (
                                <Nav.Link className={router.path === "/" ? "active" : "smoothscroll"} key={index} href={link.path}>
                                    {link.name}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
};