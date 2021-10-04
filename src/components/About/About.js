import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Mentors from '../Mentors/Mentors';

const About = () => {
    const [mentors, setMentors] = useState([]);
    useEffect(() => {
        fetch('./fakeDataMentor.json')
            .then(res => res.json())
            .then(data => setMentors(data))
    })
    return (
        <div className='container  mx-auto m-5 '>
            <h2 className='text-center text-white '>ABOUT US</h2>

            <h2 className='text-center text-white my-3'>We Are Making Free Courses For 3 Years And We Have Launched Our Premium Courses Recently</h2>
            <h2 className='text-center text-white '>Our Valuable Mentors</h2>

            <div>
                <Row xs={1} md={2} lg={4} className="g-4 my-3">
                    {
                        mentors.map(mentor => <Mentors
                            key={mentor.name}
                            mentor={mentor}></Mentors>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default About;