import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { inventoryContext } from './App'

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${props => props.color}
`;

const Detail = (props) => {
  let inventory = useContext(inventoryContext);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      // when destory
      clearTimeout(timer)
    }
  }, []);

  let [alert, setAlert] = useState(true);

  let { id } = useParams()
  let item = props.shoes.find(x => {
    return x.id == id
  });
  let history = useHistory();

  return (
    <div className="container">
      <Box>
        <Title color='black'> Detail </Title>
      </Box>

      {
        alert === true
          ? (<div>
            <p>재고가 얼마 남지 않았습니다 </p>
          </div>)
          : null
      }



      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <Info inventory={props.inventory}></Info>
          <button className="btn btn-danger" onClick={() => { props.setInventory([9, 10, 12]) }}>주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            history.goBack();
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  );
};

function Info(props) {
  // let inventory = useContext(inventoryContext);
  return (
    <p>재고 : {props.inventory[0]} </p>
    // <p> {inventory} </p>
  )
}

export default Detail;