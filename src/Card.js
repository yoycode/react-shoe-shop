import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { inventoryContext } from './App'

const Card = (props) => {
  let inventory = useContext(inventoryContext);
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={() => { history.push(`/detail/${props.shoes.id}`) }}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.content} & {props.shoes.price} </p>
      {/* {inventory[props.i]} */}
    </div>
  );
};

export default Card;