import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import img1 from './img/logo.JPG'
import './logolist.css'
const Logolist=() => { 

    return ( <div  className="logos">

<Container>
<Row>
    <Col lg="6">
        <Row>
            <Col lg="6">
              <h3>We are a global company <br/> with local culture</h3>
            </Col>
            <Col lg="6">
                <ul className="logodoc">
                    <li><a class="znanylekar" href="#"><img src={img1} alt=""/>znanylekar</a></li>
                    <li><a class="znamylekar" href="#" ><img src={img1} alt=""/>znamylekar</a></li>
                </ul>
            </Col>
        </Row>
    </Col>
    <Col lg="6">
        <ul className="logodoc2" >
            <li><a className="doctoralia" href="#"><img src={img1} alt=""/>Doctoralia</a></li>
            <li><a className="MioDottore"  href="#"><img src={img1} alt=""/>MioDottore</a></li>	
            <li><a className="DoktorTakvimi" href="#"><img src={img1} alt=""/>DoktorTakvimi</a></li>	
        </ul>	
    </Col>	  
            
                
</Row>
</Container>

      <br/><br/>

</div>)
}

export default Logolist