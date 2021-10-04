import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='text-center text-white bg-dark p-3'>
            <div>
                <h3>StartBit</h3>
                <p>Educators can customize lesson plans to best.</p>
                <h5>Our Social Media</h5>
                <div>
                    <FontAwesomeIcon className='social-icon' icon={faFacebook} />
                    <FontAwesomeIcon className='social-icon' icon={faTwitter} />
                    <FontAwesomeIcon className='social-icon' icon={faPinterest} />
                </div>
            </div>
            <div >
                <Form className="d-flex justify-content-center pb-2 ">
                    <FormControl
                        type="email"
                        placeholder="Enter Your Email"
                        className=" w-25 "
                        aria-label="email"
                    />
                    <Button variant="secondary" >Subscribe</Button>
                </Form>
            </div>

            <h6 >© 2022 StartBit, All Rights Reserved. </h6>
        </div>
    );
};

export default Footer;