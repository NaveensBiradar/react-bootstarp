import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


export default class Registration extends Component {
    constructor(props){ 
        super(props) 
        // Set initial state 
        this.state = {  
                    FirstName : '',
                    LastName:'',
                    ContactNumber:'',
                    Email:'',
                    Password:''
                } 
      } 
        
    handleFirstName = (e) => {
        this.setState({
            FirstName:e.target.value
        })
    }
    
    handleLastname = (e) => {
        this.setState({
            LastName:e.target.value
        })
    }
    
    handleontactnumber = (e) => {
        this.setState({
            ContactNumber:e.target.value
        })
    }
    
    handleEmail= (e) => {
        this.setState({
            Email:e.target.value
        })
    }
    
    handlePassword= (e) => {
        this.setState({
            Password:e.target.value
        })
    }
    
    handleSubmit = (e)=>{
        console.log(this.state.FirstName)
        console.log(this.state.LastName)
        console.log(this.state.ContactNumber)
        console.log(this.state.Email)
        console.log(this.state.Password)
        e.preventDefault();

        const userinfo ={
            "Fname":this.state.FirstName,
            "Fname":this.state.LastName,
            "contact":this.state.ContactNumber,
            "email":this.state.Email,
            "password":this.state.Password,
            "role":"admin"
        }
        console.log(`json data==>${userinfo}`)
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
                    <Form.Control type="text" placeholder="Enter first Name" value={this.state.FirstName} onChange={this.handleFirstName} />
                    <Form.Text className="text-muted">
                    Enter your Firat Nmae.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" value={this.state.LastName} onChange={this.handleLastname}/>
                    <Form.Text className="text-muted">
                        Enter your Firat Nmae.
                    </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Contact Number" value={this.state.ContactNumber} onChange={this.handleontactnumber}/>
                    <Form.Text className="text-muted">
                        Enatr Eyour contact Number
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={this.state.Email} onChange={this.handleEmail}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
            
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.Password} onChange={this.handlePassword}/>
                    </Form.Group>
    
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>

        </Card>
    )
  }
}
