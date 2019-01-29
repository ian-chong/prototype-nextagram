import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

class UserImages extends React.Component {
    state = {
      usersImages: []
      
    }
    componentDidMount() {
        const {userID} =
      // performing a GET request to '/api-end-point'
      axios.get(`https://insta.nextacademy.com/api/v1/images?userId=3`)
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({
          usersImages: result.data,

        })
        console.log (result.data)
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log('ERROR: ', error)
      })
    }
  
    render(){
      const {users} = this.state
      return (
        <div>
          <h1>UserImages</h1>
            {
              this.state.usersImages.map((user, index) => 
                <Row key={index}>
                  <Col sm='4'>
                    <Card>
                    <CardImg top width="100%" src={user} alt=""/>
                    </Card>
                    <br />
                  </Col>
                </Row>
              )
            }
        </div>
      )
    }
  }
  
  export default UserImages;