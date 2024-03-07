import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import html from "../assets/img/show1.svg"
import css from "../assets/img/shop.svg"
import javascript from "../assets/img/calling.svg"
import mysql from "../assets/img/transparent.svg"
import react from "../assets/img/select.svg"
import ai from "../assets/img/ai.svg"
import gifts from "../assets/img/gifts.svg"
import ProgressBar from 'react-bootstrap/ProgressBar';
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png"
export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
        return(
            <section className="skill" id="skills">
            <Container>
            <Row>
            <Col>
            <div className="skill-bx">
            <h2>OUR HIGHLIGHTED FEATURES</h2>
            <p>
              
            </p>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="skill-slider">
            <div className="item">
            <img src={html} alt="img"/>
            <h5>Search Sellers Nearby</h5>
            </div>
            <div className="item">
            <img src={css} alt="img"/>
            <h5>Optimised Paths</h5>
            </div>
            <div className="item">
            <img id="js"src={javascript} alt="img"/>
            <h5>Estimated Time</h5>
            </div>
            <div className="item">
            <img src={ai} alt="img"/>
            <h5>AI chatbot help</h5>
            </div>
            <div className="item">
            <img src={mysql} alt="img"/>
            <h5>Transparency</h5>
            </div>
            {/* <div className="item">
            <img id="sql" src={gifts} alt="img"/>
            <h5>Build your profile</h5>
            </div> */}
            <div className="item">
            <img id ="cpp" src={react} alt="img"/>
            <h5>C++</h5>
            </div>
            {/* <div className="item">
            <img src={c} alt="img"/>
            <h5>C</h5>
            </div>
            <div className="item">
            <img src={node} alt="img"/>
            <h5>Node</h5>
            </div> */}
            </Carousel>
            </div>
            </Col>
            </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
            </section>
        );
}