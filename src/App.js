// eslint-disable

import "./App.css";
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(1);
  

  return (
  
  
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "green", fontSize: "20px" }}>ReactBlog</h4>
      </div>

      
    <button onClick={() => {
      글제목변경(['여자 코트 추천','강남 우동 맛집','파이썬독학'])
    }}>글수정</button>

      {/* <div className='list'>
        <h4>{글제목[0]}
        <span onClick={() => {따봉변경(따봉+1)}}>👍</span>{따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>
          {글제목[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p> 
      </div> */}

    {
      글제목.map(function(a, i){
        return (
      <div className='list'>
        <h4 onClick={() => {setModal(true)} }> { 글제목[i] } </h4>
        <p>2월 17일 발행</p>
      </div>
      )})
    }


    {
      modal === true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
    }
    

    </div>
  );




    function Modal(props) {
      return (
  <div>
    <div className='modal' style={{background : props.color}}>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button> 글수정</button>
    </div>
  </div>
      )
    }
}
export default App;