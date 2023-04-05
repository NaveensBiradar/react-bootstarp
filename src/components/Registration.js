import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useState } from 'react';

import axios from 'axios';


const register = 'http://localhost:9001/register';

export default class Registration extends Component {
    constructor(props){ 
        super(props) 
        // Set initial state 
        this.state = {  
                    first_name : '',
                    last_name:'',
                    contact:'',
                    email:'',
                    password:''
                } 
      } 
        
    handlefirst_name = (e) => {
        this.setState({
            first_name:e.target.value
        })
    }
    
    handlelast_name = (e) => {
        this.setState({
            last_name:e.target.value
        })
    }
    
    handleontactnumber = (e) => {
        this.setState({
            contact:e.target.value
        })
    }
    
    handleemail= (e) => {
        this.setState({
            email:e.target.value
        })
    }
    
    handlepassword= (e) => {
        this.setState({
            password:e.target.value
        })
    }
    
    handleSubmit = (e)=>{
        console.log(this.state)

        axios.post(register,this.state)
        .then(response => {
            console.log(response)
        })

        .catch((error) => {
            console.log("Error")
            console.log(error)
        })
        e.preventDefault();
        // http://localhost:9001/getAllusers
    }

    

  render() {
    return (
        <Card  style={{padding:'20px',backgroundColor:'#f2f2f2'}}>
            <Card style={{padding:'20px',textAlign:'center'}}>
                <h3>SIGN UP</h3>
            </Card>
                <Form onSubmit={this.handleSubmit} style={{padding:'20px'}}>
                    <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first Name" value={this.state.first_name} onChange={this.handlefirst_name} />
                    <Form.Text className="text-muted">
                    Enter your Firat Nmae.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" value={this.state.last_name} onChange={this.handlelast_name}/>
                    <Form.Text className="text-muted">
                        Enter your Firat Nmae.
                    </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Contact Number" value={this.state.contact} onChange={this.handleontactnumber}/>
                    <Form.Text className="text-muted">
                        Enatr Eyour contact Number
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.Email} onChange={this.handleemail}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
            
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlepassword}/>
                    </Form.Group>
                   
                    <Row className="justify-content-md-center" style={{paddingTop:'20px',textAlign:'center'}}>
                        <Col xs lg="2">
                            <Button variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>

        </Card>
    )
  }
}
