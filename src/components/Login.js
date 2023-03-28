import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default class Login extends Component {
  render() {
    return (
        <Card  style={{padding:'20px',backgroundColor:'#f2f2f2'}}>
            <Card.Header className="text-center" as="h5">LOGIN</Card.Header>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Card className="text-center">
                        <Button className='md-2' variant="primary" type="submit">Submit</Button>
                    </Card>
                    
              
                </Form>
        </Card> 
    )
  }
}
