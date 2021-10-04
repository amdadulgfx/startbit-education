import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider (1).jpg'
import slider2 from '../../images/slider (2).jpg'
import slider3 from '../../images/slider (3).jpg'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img style={{ height: '450px', width: '300px' }}
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-bg'>
                        <h1 >Learn Your Way with StartBit to Programming</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: '450px', width: '300px' }}
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-bg'>
                        <h1>Take The First Step To Knowledge With Us</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '450px', width: '300px' }}
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-bg'>
                        <h1>Make New Friends And Learn From Experts</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;