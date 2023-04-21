import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useState } from 'react';

export default class TaskCreate extends Component {
  render() {
    return (
    
        <div>
            <Card  style={{padding:'20px',backgroundColor:'#f2f2f2'}}>
                <Card style={{padding:'20px',textAlign:'center'}}>
                    <h3>SIGN UP</h3>
                </Card>
                
                <Form onSubmit={this.handleSubmit} style={{padding:'20px'}}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first Name" />
                    <Form.Text className="text-muted">
                    Enter your Task Nmae.
                    </Form.Text>
                    </Form.Group>
    
                    <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name"  />
                    <Form.Text className="text-muted">
                        Enter your Firat Nmae.
                    </Form.Text>
                    </Form.Group>
    
    
                    <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Contact Number"  />
                    <Form.Text className="text-muted">
                        Enatr Eyour contact Number
                    </Form.Text>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
            
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Row className="justify-content-md-center" style={{paddingTop:'20px',textAlign:'center'}}>
                        <Col xs lg="2">
                            <Button variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
    
            </Card>
        </div>
        
    )
  }
}
