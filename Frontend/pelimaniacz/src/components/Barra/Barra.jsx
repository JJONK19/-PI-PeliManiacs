import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
/* -------------------------------------------------------------------------- */
/*                             Barra de navegacion                            */
/* -------------------------------------------------------------------------- */
function Barra() {
    return (
        <Navbar expand="lg" className="nav py-4">
            <Container fluid>
                <Navbar.Brand><Link className="navbar-brand align-content-start name fs-1 text-white" to={'/'}> PeliManiacZ</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <NavDropdown
                        className='px-4'
                        title={<FaRegUserCircle className="text-white fs-2" />}
                        menuVariant="dark"
                    >
                        <NavDropdown.Item><Link className="cleanLink" to={'/login'}>Login</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="cleanLink" to={'/register'}>Registro</Link></NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Barra;