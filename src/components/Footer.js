import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="fixed-bottom mt-5 bg-white">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 " >
                        Alex Qiang 
                    </Col>

                    <Col className="p-0  text-center" >
                        <a href="https://github.com/AlexQ6" target="_blank" rel="noopener noreferrer">GitHub</a>   
                    </Col> 

                    <Col className="p-0 d-flex justify-content-end" >
                        <a href="https://www.linkedin.com/in/alex-qiang/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );

}

export default Footer;