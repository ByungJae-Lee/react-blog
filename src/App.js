// eslint-disable

import "./App.css";
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  let [글제목, 성별변경] = useState(['남자 코트 추천']);
  let [강남] = useState(['강남 우동 맛집']);
  let [파이썬] = useState(['파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  
  // 여자코트추천 만들기
  // 1. 3가지 모두 나누기

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "10px" }}>
          블로그임
        </h4>
      </div>

      <div className='list'>
        <h4>{글제목} 
        <span onClick={() => {따봉변경(따봉+1)}}>👍</span>{따봉}
        <span onClick={() => {성별변경('여자 코트 추천')}}>💁‍♀️</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>
          {강남}
          <span onClick={() => {따봉변경(1)}}>👍</span></h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{파이썬}
        <span onClick={() => {따봉변경(1)}}>👍</span></h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;

// 어제숙제 관련 설명
// warning 메세제 없애는 법 -> 맨 위에 eslint-disable
// onClick 쓰는 법
// onClick={}안엔 함수이름을 넣어야한다
// state 변경하는 법
// 