

import React from 'react';
import {Container, Row, Col } from 'reactstrap';
// import img1 from './img/logo.JPG'
import List from './list';

const Platform=() => { 



      return (  <Container fluid>
           <Row className="platform" style={{backgroundColor:"#ccefff"}}>
        {/* <Row height="500%"style="background-color:#ccefff;"  className="platform"> */}
            <Col md={6} >
                <ul style={{marginLeft: '15% ', marginTop: "10%"}}>
                    <li><h2 style={{color:'#00b39b'}}><span>The world's biggest healthcare platform </span></h2></li>
					<li>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</li>
                    <li><img src="https://www.docplanner.com/img/sygnet.png" className="imageplatform" width="50%" style={{paddingTop: "30%"}}/></li>
                </ul>
			</Col>
			
			<Col md={6}>
                
					<List/>
				
		
						<br/><br/>
	   
            </Col>	
    
	
	</Row>  
      </Container>)}

    export default Platform