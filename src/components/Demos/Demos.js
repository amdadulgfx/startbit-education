import React from 'react';
import { Row } from 'react-bootstrap';
const Demos = () => {
    return (
        <div className='container m-5 mx-auto text-white text-center'>
            <h1>HERE ARE SOME DEMO CLASSES </h1>
            <h1>YOU CAN CHECK IT OUT</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QJtuhoOfGp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <iframe width="400" height="315" src="https://www.youtube.com/embed/u6ql3ZhV0ZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <iframe width="400" height="315" src="https://www.youtube.com/embed/NFP_Ev07nKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Row>
        </div>
    );
};

export default Demos;