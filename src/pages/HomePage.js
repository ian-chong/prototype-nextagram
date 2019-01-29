import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import UserImages from '../containers/UserImages';
import Loader from '../components/Loader.js';

  class HomePage extends React.Component {
    state = {
      loading: false,
      users: []
      
    }
    componentDidMount() {
      this.setState ({loading: true})
      // performing a GET request to '/api-end-point'
      axios.get('https://insta.nextacademy.com/api/v1/users/')
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({
          loading: false,
          users: result.data,
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
        this.state.loading ? 
        <div> 
          <Loader />
        </div>
        :
        <div>
          <h1>Home Page</h1>
            {this.state.users.map((user, index) => 
                <Row key={index}>
                  <Col sm='4'>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}> 
                    <CardImg top width="100%" src={user.profileImage} alt=""/>
                    <CardTitle>{user.username}</CardTitle>
                    <CardSubtitle> {user.id}</CardSubtitle>
                    <CardText>I am hard coding this description for future use.</CardText>
                    <Button>Using this button for future clicking</Button>
                    </Card>
                    <br />
                  </Col>
                </Row>
              )
            }
            <UserImages />
        </div>
      )
    }
  }
  
  export default HomePage;
  