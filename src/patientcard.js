import React from 'react';
import {Container, Row, Col } from 'reactstrap';


import './patientcard.css';



const Patientcard=() => { return <div className="pat">
<ul >

    <li>
        {/* <h6 class="white">For patients</h6> */}
        <h6>For patients</h6>

    </li>
    <li>
        {/* <h3 class="white">Find a doctor, book a visit and  */}
        <h3 style={{color:'white'}}>Find a doctor, book a visit and 

            <br/> solve any health-related doubt</h3>
    </li>

    <li>
        <div>
          
                <select >
                    <option>Choose Country</option>							   
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>  
                </select>
        </div>
                    
      
            <img src="https://www.docplanner.com/img/screen-marketplace@2x.png" width= "350 %" style={{marginLeft:'40%'} }/>
        
</li>
</ul>
</div>

}
    
export default Patientcard
