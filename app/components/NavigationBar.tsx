import Container from "react-bootstrap/cjs/Container.js";
import Nav from 'react-bootstrap/cjs/Nav.js';
import Navbar from 'react-bootstrap/cjs/Navbar.js';
import Offcanvas from 'react-bootstrap/cjs/Offcanvas.js';

export default function NavigationBar() {
    return <>
        <Navbar data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    Joseph O&apos;Dowd
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas id="basic-navbar-nav" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`basic-navbar-nav`} className="text-white">
                        Joseph O&apos;Dowd
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='justify-content-end'>
                        <Nav style={{background:"none", justifyContent:"end"}} id="main-nav" className=''>
                            <a data-to-scrollspy-id="about" href="#about" className='nav-link' onMouseDown={(e)=>e.preventDefault()} onMouseUp={(e)=>e.preventDefault()} onClick={(e)=>{e.preventDefault(); document.querySelector("#about")?.scrollIntoView()}}>
                                About Me
                            </a>
                            <a data-to-scrollspy-id="projects" href="#projects" className='nav-link'  onMouseDown={(e)=>e.preventDefault()} onMouseUp={(e)=>e.preventDefault()} onClick={(e)=>{e.preventDefault(); document.querySelector("#projects")?.scrollIntoView()}}>
                                Projects
                            </a>
                            <a  data-to-scrollspy-id="hobbies" href="#hobbies" className='nav-link'  onMouseDown={(e)=>e.preventDefault()}  onMouseUp={(e)=>e.preventDefault()} onClick={(e)=>{e.preventDefault(); document.querySelector("#hobbies")?.scrollIntoView()}}>
                                Hobbies
                            </a>
                            <a data-to-scrollspy-id="contact"  href="#contact" className='nav-link' onMouseDown={(e)=>e.preventDefault()}  onMouseUp={(e)=>e.preventDefault()} onClick={(e)=>{e.preventDefault(); document.querySelector("#contact")?.scrollIntoView()}}>
                                Contact
                            </a>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
}