
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



function App() {
  return (
    <div className="App">
        <div className='headder-portion' >
          <NavBar />
        </div>
        <div  width={171}
              height={480}>
          <Carosual />
        </div>

        <Container style={{padding:'50px'}}>
          <Row md={12}>
            {/* <Col md={2}>
              <h1>Side Panel</h1>
            </Col> */}

            <Col>
              <div style={{marginTop:'50px'}}>
                  <Login />
              </div>

              <div style={{marginTop:'50px'}}>
                  <Registration />
              </div>

              <div style={{marginTop:'50px'}}>
                  <Login />
              </div>
                
              
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
