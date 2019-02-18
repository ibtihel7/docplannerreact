import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
 
import { Row, Col } from 'reactstrap';

// import  './card.css'

const Cartitem = ({cart}) => {
  return (
    //  <div className="cardd">

    <Col lg="4" sm="12">
        <CardImg  src={cart.CardImg}/>
        <CardBody className="cardBody">
        <CardTitle>{cart.CardTitle}</CardTitle>
        <Button style={{backgroundColor:'blue'}}>{cart.Button}</Button>
        </CardBody>
        <CardImg/>
    </Col>
    //  </div>
  );
};

export default Cartitem;

