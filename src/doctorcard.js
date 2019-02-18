import React from 'react';
import {Container, Row, Col } from 'reactstrap';


import './doctorcard.css';



const Doctorcard=() =>{ 
    return (<div className="doc" >
<ul style={{marginBottom:'7%'}}>

    <li>
        {/* <h6 class="white">For patients</h6> */}
        <h6>For doctors</h6>

    </li>
    <li>
        {/* <h3 class="white">Find a doctor, book a visit and  */}
        <h3 style={{color:'white'}}>Save time managing visits and

            <br/>cut no-shows by half</h3>
    </li>

    <li>
   
      
            <img src="https://www.docplanner.com/img/screen-saas@2x.png" width= "350 %" style={{ marginLeft: '40%'} }/>
        
</li>
</ul>
</div>)

}
    
export default Doctorcard
