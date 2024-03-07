import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typed from 'typed.js';
import headerImg from "../assets/img/business.svg";

export const Banner = () => {
    const [text, setText] = useState('');
    const toRotate = ['B2B', 'B2C', 'C2B','C2C'];

    useEffect(() => {
        // Typed.js initialization
        const typed = new Typed('#element', {
            strings: toRotate,
            typeSpeed: 80,
            loop: true,
        });

        // Smooth scrolling for anchor links
        const handleClick = (e) => {
            e.preventDefault();

            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleClick);
        });

        // Cleanup function to remove event listeners and destroy Typed instance
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
            typed.destroy();
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to Logistics Solutions</span>
                        <h1>{" E-commerce solution for all"}<br /><span id="element" className="=wrap">{text}</span></h1>
                        <h3></h3>
                        <p id="para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc
                        </p>
                        <button className="vvd">
                            <a href="#sectionId" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div>Start Tracking</div>
                                <ArrowRightCircle size={25} />
                            </a>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="header-img-container">
                        <img src={headerImg} alt="Header-img" className="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
