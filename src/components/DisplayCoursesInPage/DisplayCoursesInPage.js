import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating'
const DisplayCoursesInPage = (props) => {
    const { title, img, price, rating } = props.course;
    return (
        <div>
            <Col>
                <Card className='shadow-lg'>
                    <Card.Img variant="top" src={img} className='img-fit' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>
                                <b>Price:</b> ${price}
                            </p>
                            <Rating
                                initialRating={rating}
                                readonly
                                emptySymbol="far fa-star rating-color "
                                fullSymbol="fas fa-star rating-color "
                            />

                            <br />
                            <Button className='mt-2' variant='primary'> <FontAwesomeIcon icon={faCartPlus} /> Purchase</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DisplayCoursesInPage;