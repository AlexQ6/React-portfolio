import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa"

    
function Footer() {

    return(
        <footer className="fixed-bottom mt-5 bg-white">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-2">
                    <Col className="p-0 " >
                        Alex Qiang 
                    </Col>

                    <Col className="p-0  text-center" >
                        <a href="https://github.com/AlexQ6" target="_blank" rel="noopener noreferrer"><GoMarkGithub size="23"/></a> 
                    </Col> 

                    <Col className="p-0 d-flex justify-content-end" >
                        <a href="https://www.linkedin.com/in/alex-qiang/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="23"/></a> 
                    </Col>

                </Row>
            </Container>
        </footer>
    );

}

export default Footer;