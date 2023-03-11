// eslint-disable

import "./App.css";
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  let [남자, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "10px" }}>
          블로그임
        </h4>
      </div>



      <div className='list'>
        <h4>{남자[0]} 
          <span onClick={() => {따봉변경(1)}}>👍</span>
          {따봉}
        </h4>
        <p>2월 17일 발행.</p>
      </div>

      <div className='list'>
        <h4>{남자[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{남자[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;

// 어제숙제 관련 설명
// 