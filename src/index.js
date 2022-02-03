import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

let initState = [{
  id: 0,
  name: 'cool shoes',
  quan: 2
}, {
  id: 1,
  name: 'cooler shoes',
  quan: 3
}]

function reducer(state = initState, action) {

  if (action.type === 'addItem') {
    let copy = [...state];
    // 만약 id가 같은 상품이 있으면 추가하지말고 수량만 추가
    let found = state.findIndex((x) => { return x.id === action.payload.id }) // 있으면 index, 없으면 -1
    if (found >= 0) {
      copy[found].quan++;
      return copy;
    } else {
      copy.push(action.payload);
      return copy;
    }
  } else if (action.type === 'inc') {
    let copy = [...state];  // 완벽한 독립적인 copy본이 생김
    copy[action.payload].quan++;
    return copy
  } else if (action.type === 'dec') {
    let copy = [...state];
    copy[action.payload].quan--;
    return copy
  } else {
    return state
  }
}

// 그런데 이렇게 여러 컴포넌트에서 사용되지 않을 경우에는 redux store에 굳이 저장할 필요 없음 
let initAlert = true;
function reducer2(state = initAlert, action) {  // 여기에 그냥 initAlert대신 true 넣어줄 수도 있음 
  if (action.type === 'close') {
    state = false;
  }
  return state;
}

// let store = createStore(reducer);
let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
