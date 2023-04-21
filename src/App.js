
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
import SidePanel from './components/SidePanel';
import LangindPage from './components/LangindPage';
import UserDashboard from './components/UserDashboard';
import TaskCreate from './components/TaskCreate';




function App() {
  return (
    <div className="App">

      <div>

        <Row style={{ padding: '20px' }}>
          <Card>
            <Col xs={12} style={{ border: '1px' }}>
              <NavBar />
            </Col>
          </Card>
        </Row>



        <Row style={{ padding: '20px' }}>
          <Card style={{ margin: '5px' }}>
            <Col xs={12} style={{ border: '1px' }}>
              <Carosual />
            </Col>
          </Card>
        </Row>

        
        <Row style={{ padding: '20px', display:'none' }}>
          <Card style={{ margin: '5px' }}>
            <Col xs={12} style={{ border: '1px' }}>
              <LangindPage />
            </Col>
          </Card>
        </Row>
        
        
        <div className='Registration-login'>
          <Row style={{ padding: '20px' }}>
            {/* //SIDE Panel */}
            <Col xs={2} >
              <Card style={{ padding: '5px' }}>
                <SidePanel />
              </Card>
            </Col>
  
            {/* Registration Form */}
            <Col xs={10} style={{ border: '1px' }}>
              <div style={{marginBottom:'10px'}}>
                <Registration />
              </div>
              
              <div style={{paddingTop:'10px'}}>
                <Login />
              </div>
            </Col>
          </Row>
          
          <div style={{ padding: '20px' }}>
            <h3>User List</h3>
            <UserList />
          </div>
          
        </div>  

        <TaskCreate/>
        <Row style={{ padding: '20px' }}>
          <Card style={{ margin: '5px' }}>
            <Col xs={12} style={{ border: '1px' }}>
              <h2>Footer content</h2>
            </Col>
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default App;
