import React, { useEffect } from 'react';
import './MyBio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatarImage from '../assets/img/avatar.jpg';

function MyBio() {
    useEffect(() => {
        document.title = 'Bio';
    }, []);

    return (
        <Container className='p-3 mt-3'>
            <Row>
                <Col lg={3} sm={12} className="d-flex justify-content-center">
                    <img
                        id='avatar'
                        src={avatarImage}
                        className="rounded-circle"
                        alt="MPhong"
                    />
                </Col>
                <Col lg={9} sm={12}>
                    <Row>
                        <Col xs={12}>
                            <h2>Phong M. Dang</h2>
                        </Col>

                        <Col xs={12}>
                            <p>
                                My Description!
                            </p>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>

            <Row>
                <Col xs={6} className="pt-4 d-none d-sm-block">
                    <h3> ~// Project</h3>
                </Col>
            </Row>


        </Container>
    );
}

export default MyBio;