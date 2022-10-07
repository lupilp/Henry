import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (<div >
    
    <h3>{props.name}</h3>
    <h5>Min {props.min}</h5>
    <h5>Max {props.max}</h5>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
    <button onClick={props.onClose}>
  X
</button>
  </div>)
};