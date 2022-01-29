import { connect } from 'react-redux';
import React from 'react';
import { Table } from 'react-bootstrap'

const Cart = (props) => {
  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            props.state.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quan}</td>
                  <td>
                    <button onClick={() => { props.dispatch({ type: 'inc' }) }}> + </button>
                    <button onClick={() => { props.dispatch({ type: 'dec' }) }}> - </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      {
        props.openAlert === true
          ? (<div>
            <p> 지금 구매하면 신규할인 20% </p>
            <button onClick={() => { props.dispatch({ type: 'close' }) }}> 닫기 </button>
          </div>)
          : null
      }
    </div>
  );
};

// store안에 있던 데이터를 가져와서 props로 return 해주는 함수 
function storeToProps(state) {
  return {
    // name: state[0].name  // 이렇게 적어줘도 되지만
    // state // store안의  state를 통째로 다 가져옴 

    // state가 2개 이상이어서 combineReducers 사용한 경우
    state: state.reducer,
    openAlert: state.reducer2,
  }
}

// export default Cart;
export default connect(storeToProps)(Cart)