import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Welcome!</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;