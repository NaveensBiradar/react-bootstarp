import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const userList = 'http://localhost:9001/getAllusers'

export default class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    try {
      const token = JSON.parse(localStorage.getItem('login'));
      await axios.get (userList, {
        headers: {
          'authorization': `${token.storeToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
           this.setState({
            users: response.data.data
          })
        })
    }
    catch {
      alert("not mount")
    }
  }

  
  render() {
      console.log("this.state.users",this.state.users)
    return (
      <div>
        <Row className="justify-content-md-center" style={{ paddingTop: '20px', textAlign: 'center' }}>
          <Col xs lg="2">
          {(() => {
              if (this.state.users != undefined && this.state.users != [] ){
                this.state.users.map(user => {
                  return (
                    <div>
                       <h2>{user.f_name} {user.email}</h2>
                    </div>
                  )
                })
              }{
                return null;
              }
              
              
            })()}
                
              
                {
                                  
                
                  // this.state.users.map(user => {
                  //   return (
                  //     <div>
                  //        <h2>{user.f_name} {user.email}</h2>
                  //     </div>
                  //   )
                  // })
                }
          </Col>
          
          <Col xs lg="10">
                {
                  this.state.users.map(user => {
                    return (
                      <div>
                         <h2>{user.f_name} {user.email}</h2>
                      </div>
                    )
                  })
                }
          </Col>
        </Row>
      </div>
    )
  }
}

