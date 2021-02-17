import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/glampcamp.png';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <Navbar className="mobileStyle" bg="light" variant="light">
            <Navbar.Brand><Link to="/" className="text-dark"><img src={logo} alt="Glamp Camp Logo" className="logoStyle"/></Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link to="/about" className="mobileRemove text-dark">About</Link></Nav.Link>
                <Nav.Link><Link to="/gallery" className="mobileRemove text-dark">Gallery</Link></Nav.Link>
                <Nav.Link><Link to="/pricing" className="mobileRemove text-dark">Pricing</Link></Nav.Link>
                <Nav.Link><Link to="/contact" className="mobileRemove text-dark">Contact</Link></Nav.Link>
            </Nav>
            <a className="text-dark" href="https://www.facebook.com/glamp.camp.5/"><FaFacebookSquare size={20} className="ml-auto mr-2" /></a>
            <a className="text-dark" href="https://www.instagram.com/glampcamp21/"><FaInstagram size={20} className="mr-3" /></a>

            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form> */}
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                            <li className="nav-text">
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/pricing">
                                    <span>Pricing</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/gallery">
                                    <span>Gallery</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/about">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="nav-text">
                                <Link to="/contact">
                                    <span>Contact</span>
                                </Link>
                            </li>   
                </ul>
            </nav>
        </Navbar>
    )
}

export default Header;
