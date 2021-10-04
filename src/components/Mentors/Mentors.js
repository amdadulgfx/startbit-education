import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Mentors.css'
const Mentors = (props) => {
    // console.log(props.mentor);
    const { name, image, teaches } = props.mentor;
    return (
        <Col>
            <Card className='shadow-lg'>
                <Card.Img variant="top" src={image} className='img-mentor mx-auto' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p className='teaching-area'>
                            <b>Teaching Area:</b> {teaches}
                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Mentors;