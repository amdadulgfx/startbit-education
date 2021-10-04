import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './DisplayCourses.css'
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const DisplayCourses = (props) => {
    // console.log();
    const { title, img, price, rating } = props.course;
    return (
        props.course.id < 5 &&
        (<div >
            <Col>
                {/* all cards  */}
                <Card className='shadow-lg'>
                    <Card.Img variant="top" src={img} className='img-fit' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>
                                <b>Price:</b> ${price}
                            </p>
                            {/* rating sytem added here */}
                            <Rating
                                initialRating={rating}
                                readonly
                                emptySymbol="far fa-star rating-color "
                                fullSymbol="fas fa-star rating-color "
                            />
                            <br />
                            <Button className='mt-2' variant='primary'> <FontAwesomeIcon icon={faCartPlus} /> Enroll Now</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>)
    );
};

export default DisplayCourses;