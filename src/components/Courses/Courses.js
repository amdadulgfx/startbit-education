import React from 'react';
import { Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import DisplayCoursesInPage from '../DisplayCoursesInPage/DisplayCoursesInPage';

const Courses = () => {
    const [courses, setCourse] = useState([]);
    //fetching course information
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className='container my-5'>
            {/* all course details in bootstrap row col */}
            <h1 className='text-center text-white mb-3'>ALL OF OUR COURSES AT A GLANCE</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    courses.map(course => <DisplayCoursesInPage
                        key={course.key}
                        course={course}></DisplayCoursesInPage>)
                }
            </Row>
        </div>
    );
};

export default Courses;