import React, { Component } from 'react';
import { Container,Row, Col } from 'reactstrap';

// import logo from './logo.svg';
// import { Button } from 'reactstrap';

import './App.css';
import Title from './title'
import Parag from './parag'
 import Patientcard from './patientcard'
import Doctorcard from './doctorcard'
 import Text from'./text'
// import Logotext from'./logotext'
// import Logoservic from'./logoservic.js'
 import Platform from './platform';
 import Navbarr from './navbar';
 import Footer from './footer';
 import Logolist from './logolist';
 import Card from './card';
//  import List from './list';
class App extends Component {
  render() {
    return (<div>
        <Navbarr/>
          <Title/>
       <Parag/>
       <Container>
       <Row>
         <Col lg='6'>
        <Patientcard/>   
        </Col>
        <Col lg='6'>
         <Doctorcard/>
         </Col>
         </Row>
         </Container>
           <Logolist/>
    
        {/* <List/> */}
        <Platform/><br/>
        <Text/><br/>
        <Card/>
        <br/><hr/>
        <Footer/>
       
    </div>)
  }
}

export default App;


