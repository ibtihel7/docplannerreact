import React, { Component } from 'react'
import { Container, Row } from 'reactstrap';
import Cartitem from "./carditem"
import img1 from './img/warsaw.JPG' 
import img2 from './img/barcelone.JPG' 
import img3 from './img/istanbul.JPG' 
import img4 from './img/rome.JPG' 
import img5 from './img/mexico.JPG' 
import img6 from './img/curitibia.JPG' 


const tab=[
    {CardImg:img1,CardTitle:"Warsaw",Button:"SEE OPENINGS",Ref:"https://www.docplanner.com/career?&loc=brazil#jobs-offers"},
    {CardImg:img2,CardTitle:"Barcelona",Button:"SEE OPENINGS",Ref:"https://www.docplanner.com/career?&loc=brazil#jobs-offers"},
    {CardImg:img3,CardTitle:"Istanbul",Button:"SEE OPENINGS",Ref:""},
    {CardImg:img4,CardTitle:"Rome",Button:"SEE OPENINGS",Ref:""},
    {CardImg:img5,CardTitle:"Mexico City",Button:"SEE OPENINGS",Ref:""},
    {CardImg:img6,CardTitle:"Curitiba",Button:"SEE OPENINGS",Ref:""},
]

class Card extends Component {
    
    render() { 
        return ( <div className="list">
    
        <Container>
            <center>
        <Row>
            {
              tab.map((el,index)=><Cartitem cart={el} key={index}/>)  
            }
            
        </Row>
        </center>
        </Container>
        </div> );
    }
}
 
export default Card;



