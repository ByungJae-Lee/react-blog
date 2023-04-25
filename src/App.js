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
  let [modal, setModal] = useState(true);
  
//  
//  반복문 축약하는 방법
//    1. map함수를 사용
//    1-1. [배열].map(콜백함수){ }
//    1-2. 배열 자료 갯수만큼 함수안의 코드 실행해줌
//    1-3. 함수 파라미터 === 배열안에 있는 자료임, 돌면서 출력해줌
//    1-4. return에 뭐 적으면 배열로 담아줌
  [1,2,3].map(function(a){
    return '아무거나아아아아앙배열 힛'
  })


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
      
      {/* <div className = 'list'>
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}> 👍 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className = 'list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className = 'list'>
        <h4 onClick={ ()=>{ setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
    {
      글제목.map(function(a, i){
        return (
        <div className = 'list' key={ i }>
        <h4 onClick={ ()=> {setModal(true)}}> { 글제목[i] } 
        <span onClick={()=>{따봉변경(따봉+1)}}> 👍 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      )})
    }

      {
        modal === true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
      }

{/* 
1. map함수 개념 및 실전적용 - 반복적인 작업을 할 때 사용 if,for문은 react 중괄호에서 사용이 불가하기 때문에 map함수를 써준다
2. props 개념 및 사용방법
3. input 태그에 대한 정리, input 입력한 값 가져오는 방법
*/}

      
  {/*
  if, for 작성불가 3항연산자로 작성해야함
   */}
      
    </div>
  );
/* 컴포넌트 만들기 
 1. function 만들고 -> function app 바깥에다 만들어야함
 2. return() 안에 html 담기
 3. <함수명><함수명> 쓰기
*/
  
}


function Modal(props) {
  return(<div className='modal' style={{background : props.color}}>
  <h4>{props.글제목[0]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
  <button onClick={ ()=> { props.글제목변경(['여자 코트 추천','강남 우동 맛집','파이썬 독학']) } }>글수정</button>
</div>)
}

export default App;