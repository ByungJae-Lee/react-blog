import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  let [남자] = useState('남자 코트 추천');
  let [강남] = useState('강남 우동 맛집');
  let [파이] = useState('파이썬독학');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "10px" }}>
          블로그임
        </h4>
      </div>

      <div className='list'>
        <h4>{남자}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{강남}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{파이}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;
