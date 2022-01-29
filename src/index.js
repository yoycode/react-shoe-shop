import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

let initState = [{
  id: 0,
  name: 'cool shoes',
  quan: 2
}, {
  id: 1,
  name: 'cooler shoes',
  quan: 23
}]

function reducer(state = initState, action) {
  if (action.type === 'inc') {
    let copy = [...state];  // 완벽한 독립적인 copy본이 생김
    copy[0].quan++;
    return copy
  } else if (action.type === 'dec') {
    let copy = [...state];
    copy[0].quan--;
    return copy
  } else {
    return state
  }
}
let store = createStore(reducer);

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
