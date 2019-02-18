import React, { Component } from 'react'
import {Container,Col, Row } from 'reactstrap';
import Item from "./item";


const tab=[
    {Log:"https://www.docplanner.com/img/flag.png",Titleitem:"Leader in 10 countries",p:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
    {Log:"https://www.docplanner.com/img/visits.png",Titleitem:"1 million appointments",p:"booked last month"},
   
];
const tab2=[ {Log:"https://www.docplanner.com/img/patients.png",Titleitem:"30 million unique patients",p:"visit us every month"},
{Log:"https://www.docplanner.com/img/doctors.png",Titleitem:"2 million active doctors",p:"trust in our solutions"},
]
class List extends Component {
    
    render() { 
        return ( <div className="list" style={{paddingTop: "5%" }}>
        <Row>
            {
              tab.map((el,index)=> <Col lg={6}><Item item={el} key={index}/></Col>)  
            }
            
        </Row>
        <Row>
            {
              tab2.map((el,index)=> <Col lg={6}><Item item={el} key={index}/></Col>)  
            }
            
        </Row>

        </div> )
    };
};

export default List ;



