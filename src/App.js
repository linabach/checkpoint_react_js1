import React, { Component } from 'react';
import { Button, Card, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        index: (prevState.index + 1) % this.images.length
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  images = [
    'house1.jpg',
    'house4.jpg',
    'house8.jpg'
  ];

  render() {
    return (
      <div className="App">
     {/* Navbar  with navigation links and a search form */}
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">HomeArch</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Get Ideas</Nav.Link>
                <Nav.Link href="#action2">Sign In</Nav.Link>
                <NavDropdown title="Find our Professionals" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Architecs</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  Interior Designer
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                  Other Services
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Join us as Pro
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <div>
          <img src={this.images[this.state.index]} alt="Slideshow" width={'100%'} />
        </div>
        <div style={{ display: 'flex', justifyContent:'space-around',alignItems:'center'}} className='backcolr'>
         {/*Set the width and height of the card element*/} 
        <Card id='cardcs'  style={{ width: '22rem', heigh:'18rem',marginBottom:'30px', marginTop: '50px' }}>
          <Card.Body>
           {/*Set the title of the card element*/} 
            <Card.Title style={{ marginBottom:'30px' }}>Meet our talented architect</Card.Title>
             {/*Set the image of the card element*/} 
            <Card.Img style={{ marginBottom:'30px' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAf-iqlaYWou6wlsLf7LplV9oeADr3A1gEA&usqp=CAU" />
            <Button variant="primary">Book a meeting</Button>
           </Card.Body>
        </Card>

        <Card id='cardcs' style={{ width: '22rem', heigh:'25rem', marginBottom:'30px', marginTop: '50px' }}>
          <Card.Body>
            <Card.Title style={{ marginBottom:'30px' }}>Meet our Interior Designer</Card.Title>
            <Card.Img style={{ marginBottom:'30px' }} variant="top" src="https://images.ctfassets.net/wp1lcwdav1p1/5mr7kXigbSSMhnAWo0e7hH/63af10211e71706bcc5c9292fcec23a4/data_architect.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive" />
            <Button variant="primary">Book a meeting</Button>
           </Card.Body>
        </Card>
      
        <Card id='cardcs' style={{ width: '22rem', heigh:'40rem', marginBottom:'30px',  marginTop: '50px' }}>
          <Card.Body>
            <Card.Title style={{ marginBottom:'30px' }}>Meet our talented architect</Card.Title>
            <Card.Img style={{ marginBottom:'30px' }} variant="top" src="https://cdn.careeronestop.org/OccVids/OccupationVideos/17-1011.00.jpg" />
            <Button variant="primary">Book a meeting</Button>
           </Card.Body>
        </Card>
    </div>
      </div>
     ) 
  
   
  }
}

export default App;

