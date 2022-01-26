import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${props => props.color}
`;

const Detail = (props) => {

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
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            history.goBack();
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;