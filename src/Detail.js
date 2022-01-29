import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { inventoryContext } from './App'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import './Detail.css';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${props => props.color}
`;

const Detail = (props) => {
  let [alert, setAlert] = useState(true);
  let { id } = useParams()
  let item = props.shoes.find(x => {
    return x.id == id
  });
  let history = useHistory();

  let inventory = useContext(inventoryContext);

  let [tab, setTab] = useState(0);
  let [switchTransition, setSwitchTransition] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      // when destory
      clearTimeout(timer)
    }
  }, []);

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
          <button className="btn btn-danger" onClick={() => {
            props.setInventory([9, 10, 12])
            props.dispatch({ type: 'addItem', payload: { id: 2, name: 'new shoes', quan: 4 } })
            history.push('/cart')
          }}>주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            history.goBack();
          }}>뒤로가기</button>
        </div>
      </div>


      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { setTab(0); setSwitchTransition(false) }}>Active1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setTab(1); setSwitchTransition(false) }} >Active2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { setTab(2); setSwitchTransition(false) }} >Active3</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={switchTransition} classNames="wow" timeout={500}>
        <TabContent tab={tab} setSwitchTransition={setSwitchTransition} />
      </CSSTransition>

    </div >
  );
};

function TabContent(props) {

  useEffect(() => {
    props.setSwitchTransition(true);
  })

  if (props.tab === 0) {
    return <div> 0번째 내용입니다</div>
  } else if (props.tab === 1) {
    return <div> 1번째 내용입니다</div>
  } else if (props.tab === 2) {
    return <div> 2번째 내용입니다</div>
  }
}


function Info(props) {
  // let inventory = useContext(inventoryContext);
  return (
    <p>재고 : {props.inventory[0]} </p>
    // <p> {inventory} </p>
  )
}


function storeToProps(state) {
  return {
    state: state.reducer,
    openAlert: state.reducer2,
  }
}

// export default Cart;
export default connect(storeToProps)(Detail)