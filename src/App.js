
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Registration from './components/Registration';
import NavBar from './components/Header'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Login from './components/Login'
import Carosual from './components/Carosual';
import UserList from './components/UserList';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App" style={{backgroundColor:'#eeeee4'}}>

      <div>
        
          <Row style={{padding:'20px'}}>
            <Card>
              <Col xs={12} style={{border:'1px'}}>
                <NavBar />
              </Col>
            </Card>
          </Row>
       
          
        
          <Row style={{padding:'20px'}}>
            <Card style={{margin:'5px'}}>
              <Col xs={12} style={{border:'1px'}}>
                <Carosual />
              </Col>
            </Card>
          </Row>

          <Row style={{padding:'20px'}}>
            
            <Col xs={2}>
              <Card>
                  <h4>Side panel</h4>
              </Card>
            </Col>
            <Col xs={8} style={{border:'1px',paddingRight:'2px'}}>
              <div>
                <Registration />
              </div>
              
              <div>
                <Login />
              </div>
            </Col>
          </Row>
        


          <Row style={{padding:'20px'}}>
            <Col xs={12} style={{border:'1px'}}>
              <Footer />
            </Col>
          </Row>

          

      </div>  
    </div>  
  );
}

export default App;
