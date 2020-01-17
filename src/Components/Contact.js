import React from 'react';
import { Row , Col } from 'reactstrap';
import Img1 from '../Images/img1.png';
import './Styles/Contact.css';

function Contact () {
    return (
        <div className="contact">
            <div className="container">
                <Row className="row">
                    <Col>
                        <img src={Img1} alt="" />
                    </Col>
                    <Col>
                         <div className="data2">
                            <span>Contact Us</span>
                            <h3>200, Green road, Mongla, New Yor City USA</h3>
                            <h2>+10 367 267 2678</h2>
                            <h4>reservation@montana.com</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Contact;