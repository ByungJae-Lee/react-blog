/* 1. eslint-disable: Lint 끄는 기능임 warning messages 끄기 
   2. eventhandler - onClick 쓰는 법
 - tag내에 onClick 입력 후 {} <- 중괄호 내에 함수 이름을 넣어야 함
 기존 함수 문법
function 함수(){} 말고 다른 문법 ()=> {}을 사용하면 편리
  3. state 변경하는 법
  state는 등호로 변경금지 / state변경함수(새로운 state)
  */

import { useState } from 'react';
import "./App.css";

function App() {

  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
  let [따봉, 따봉변경] = useState(0);
  

  return (
    


    <div className='App'>

      <div className= 'black-nav'>
        <h4>ReactBlog</h4> 
      </div>


   <button onClick={()=> {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy)
   }}>가나다순정렬</button>

      <button onClick={()=> { 
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
        }}>글수정</button>
      
      <div className = 'list'>
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}> 👍 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className = 'list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className = 'list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>

    </div>


  );
/* 컴포넌트 만들기 
 1. function 만들고 -> function app 바깥에다 만들어야함
 2. return() 안에 html 담기
 3. <함수명><함수명> 쓰기
*/
    function Modal() {
      return(<div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>)

    }

}
export default App;