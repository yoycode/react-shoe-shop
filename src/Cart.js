import { connect, useSelector, useDispatch } from 'react-redux';
import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap'

const Cart = (props) => {

  let state = useSelector((state) => state.reducer);
  let dispatch = useDispatch();

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
            state.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quan}</td>
                  <td>
                    <button onClick={() => { dispatch({ type: 'inc', payload: item.id }) }}> + </button>
                    <button onClick={() => { dispatch({ type: 'dec', payload: item.id }) }}> - </button>
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
            <button onClick={() => { dispatch({ type: 'close' }) }}> 닫기 </button>
          </div>)
          : null
      }

      <Parent name="yoy12" age="28" />
    </div>
  );
};

function Parent(props) {
  return (
    <div>
      <Child1 name={props.name} />
      <Child2 age={props.age} />
    </div>
  )
}
function Child1() {
  useEffect(() => { console.log('렌더링됨1') });
  return <div>1111</div>
}
let Child2 = memo(function () {
  useEffect(() => { console.log('렌더링됨2') });
  return <div>2222</div>
});

// // store안에 있던 데이터를 가져와서 props로 return 해주는 함수 
// function storeToProps(state) {
//   return {
//     // name: state[0].name  // 이렇게 적어줘도 되지만
//     // state // store안의  state를 통째로 다 가져옴 

//     // state가 2개 이상이어서 combineReducers 사용한 경우
//     state: state.reducer,
//     openAlert: state.reducer2,
//   }
// }

export default Cart;
// export default connect(storeToProps)(Cart)