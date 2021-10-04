import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import slider1 from '../../images/slider (1).jpg'
import slider2 from '../../images/slider (2).jpg'
import slider3 from '../../images/slider (3).jpg'
import DisplayCourses from '../DisplayCourses/DisplayCourses';
import './Home.css'
const Home = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            {/* course attraction in carousel */}
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-bg'>
                        <h1 >Learn Your Way with StartBit to Programming etc.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 img-fluid"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-bg'>
                        <h1>Take The First Step To Knowledge With Us</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-bg'>
                        <h1>Make New Friends And Learn From Experts</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* top courses here */}
            <div className='container my-5'>
                <h1 className='text-center text-white mb-3'>TOP COURSES</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        courses.map(course => <DisplayCourses
                            key={course.key}
                            course={course}></DisplayCourses>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;