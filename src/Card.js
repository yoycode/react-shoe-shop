import React, { useState, useContext } from 'react';
import { inventoryContext } from './App'

const Card = (props) => {
  let inventory = useContext(inventoryContext);

  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.content} & {props.shoes.price} </p>
      {/* {inventory[props.i]} */}
    </div>
  );
};

export default Card;