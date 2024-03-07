import { Col, Nav, Row, Container, Tab, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/gradient (1).png"
import html from "../assets/img/show1.svg"
import css from "../assets/img/shop.svg"
import javascript from "../assets/img/calling.svg"
import mysql from "../assets/img/transparent.svg"
import react from "../assets/img/select.svg"
import ai from "../assets/img/ai.svg"
export const Projects = () => {
    const projects = [
        
        {
            title: "Search Sellers Nearby",
            Description: "",
            imgurl: html,
        },
        {
            title: "Optimised Paths for your shipment",
            Description: "",
            imgurl: css,
            url: ""
        },
        
        {
            title: "Track Your Order",
            Description: "",
            imgurl: javascript,
        },
        {
            title: "Accurate Estimated Time",
            Description: "",
            imgurl: mysql,
        },
        {
            title: "Transparency with users",
            Description: "",
            imgurl: react,
        },
        {
            title: "AI chatbot help",
            Description: "",
            imgurl: ai,
        },
    ]
    return (
        <section className="Project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>FEATURES</h2>
                        <p></p>
                        <TabContainer id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="two"></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two"></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                       
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />

                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="two">
                                <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
                                        My Github Account Link <a href="https://github.com/saumyasharma03">here</a>
                                        <br />
                                        <ul>
                                        <li>
                                                React-Personal-Portfolio: My personal portfolio using REACT.JS framework for showcasing my skills and projects. Along with React, React-Bootstrap and  packages like nodemailer,cors and express to create servers that helps to user to get in touch with me.
                                                Fully funcitonal and Responsive, find it <a href="https://github.com/saumyasharma03/React-Personal-Portfolio">here</a>
                                            </li>
                                            <br/>
                                            <li>
                                                EduSprint- an educational platform: A personal project to help users share resources, create flashcards and make quizzes for better learning.
                                                It also connects user's info to the bckend and lets them login with their credentials, user validation implemented through php and MySQL database used.
                                                Find it <a href="https://github.com/saumyasharma03/EduSprint-project-educational-platform">here</a>
                                            </li>
                                            
                                        </ul>

                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
                                        <br />
                                        <ul>
                                            <li>
                                                Dincharya: made in a group of 2, Dincharya is a habit tracker that lets you create events and stores them in backend using file handlig'. It helps you to plan your important events by allowing you to find locations through use of Graphs, Trees, MultiList etc.
                                                Find it <a href="">here</a>
                                            </li>
                                            <br/>
                                            <li>
                                                Healr: Built for Bitbox 3.0 in healthcare track in a team of 2, Healr helps you identify your symptoms and allows you to connect withyour doctors.
                                                It stores your data in backend using PHP,MySQL and also use Bing MAP API integration.
                                                Find it <a href="">here</a>
                                            </li>
                                        </ul>
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}