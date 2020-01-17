import React , { Component } from 'react';
import { Card, Button, CardTitle, CardBody, Row, Col } from 'reactstrap';
import Axios from 'axios';
import './Styles/Home.css';
import { Link } from 'react-router-dom';



class Home extends Component {
    state = {
        data : []
    }
    componentDidMount() {
        Axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                data:response.data.slice(0,100)
            })
        })

    }
    render () {
        const { data } = this.state;
        const postData = data.length ? (
            data.map(post => {
                return (
                    <Row className="row" key={post.id}>
                        <Col ms="4" className="post" >
                            <Card>
                                <CardBody>
                                    <CardTitle className="title"> {post.title} </CardTitle>
                                    <Link to= {'/post/' + post.id}>
                                         <Button outline color="secondary">Read More</Button>{' '}
                                    </Link>
                                </CardBody>    
                            </Card>
                        </Col> 
                    </Row>
                )
            })
        ) : ( 
            <div className="center">No Posts yet</div>
        )

        return(
            <div className="home">
                <div className="container">
                    {postData}
                </div>
            </div>
        );
    }
}
export default Home;