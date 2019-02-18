import React from 'react';
 
 import {Container, Row, Col } from 'reactstrap';

// import  './card.css'

const Item = ({item}) => {
  return (
     <div className="it" style={{backgroundColor:'white',height:'200px',width:'70%',marginTop:'2%',marginBottom:'2%'}}>
    
    <center>
      
  
        <img src={item.Log} style={{paddingTop: "10%"}}/>   
        <h3>{item.Titleitem}</h3>
        <p style={{textAlign: "center",fontSize: ".8125em",color: "#747474"}}>{item.p}</p>
     
      <br/>
   
</center>
    </div>
  );
};

export default Item;

