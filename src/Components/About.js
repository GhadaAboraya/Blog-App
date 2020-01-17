import React from 'react';
import { Row , Col , Button } from 'reactstrap';
import About1 from '../Images/about1.png';
import './Styles/About.css';

function About () {
    return (
        <div className="about">
            <div className="container">
                <Row className="row">
                    <Col md="6">
                        <img src={About1} className="img1" alt="" />
                    </Col>
                    <Col md="6">
                        <div className="data">
                            <span>About Us</span>
                            <h1>A Luxuries Hotel with Nature</h1>
                            <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                            <Button className="button">Learn More</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default About;