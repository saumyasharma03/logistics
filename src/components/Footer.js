import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <section className='Footer'>
            <footer className="mt-5">
                <Container>
                    <Row>
                        <p>
                            Thankyou for visiting us!
                            <br/>
                            
                        </p>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <p>&copy; All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </section>
    );
};

export default Footer;
