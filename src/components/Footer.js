import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default class Footer extends Component {
  render() {
    return (
        <Container>
            <Row className="justify-content-md-center">
              <Card style={{margin:'5px', backgroundColor:"#eeeee4"}}>
                <Col xs={12} style={{border:'1px'}}>
                  <h2>Footer</h2>
                </Col>
              </Card>
            </Row>
            
        </Container>
      
    )
  }
}
