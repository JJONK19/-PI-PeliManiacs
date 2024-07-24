import { Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
/* -------------------------------------------------------------------------- */
/*                             Barra de navegacion                            */
/* -------------------------------------------------------------------------- */
function Navbar () {
    return (
        <nav className="container-fluid nav">
            <Link className="navbar-brand align-content-start" to={'/'}><h1>PeliManiacZ</h1></Link>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaUserCircle className="text-white" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}

export default Navbar;