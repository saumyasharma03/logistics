import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import { useAuth0 } from '@auth0/auth0-react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-icon-1-logo-svgrepo-com (1).svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import LogoutButton from "./logout";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const NavBar = () => {
    const redirectToLoginPage = () => {
        window.location.href = '/loginpage';
    };

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [loginned, setLoginned] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }
            else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const { user, loginWithRedirect } = useAuth0();
    console.log('User', user);
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <img id="navlogo" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex">

                        <Nav.Link href="/home" className="opt me-3 text-white">Home</Nav.Link>
                        <Nav.Link href="/loctrack" className="opt me-3 text-white">Track location</Nav.Link>
                        <Nav.Link href="/loctrack2" className="opt me-3 text-white">Reverse Geocoding</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        {/* <div className="social-icon">

                            <a href="/loginpage"></a> */}
                            
                            <button onClick={(e) => user ? LogoutButton : loginWithRedirect()}>
                                {user ? <p>Logout</p> : <p>Login</p>}
                            </button>

                        {/* </div> */}
                        <button onClick={redirectToLoginPage}>

                            <span ><a> Switch Type</a></span>

                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}