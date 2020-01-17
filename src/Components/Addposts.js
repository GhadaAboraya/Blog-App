import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";

class Addposts extends Component {
  state = {
    title: null,
    body: null
  };
  handleChange = e => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: this.state.title,
        body: this.state.body,
        userId: 1
      })
      .then((response) => {
        console.log("created", response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="addposts">
        <div className="container">
          <h1>Add Posts</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                onChange={this.handleChange}
                name="text"
                id="title"
                placeholder="Enter The Title"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                onChange={this.handleChange}
                name="text"
                id="body"
                placeholder="Enter The Body"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Addposts;
