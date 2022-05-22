import React from 'react'

const Intro = (props) => {
  return (
  <div className='section'>
    {props.language === "korean"? (
    <>
      <h4>자기소개</h4>
      <div className='content'>
        <p className='intro'>안녕하세요. 저는 풀스택 개발자 곽지혜입니다. 최근 샌프란시스코의 General Assembly에서 24주 기간동안 풀스택 소프트웨어 엔지니어링 교육을 이수, 수료하였습니다. 주니어 개발자로 새로운 커리어를 시작하려고 합니다. </p>
      </div>
    </>):(
    <>
      <h4>Intro</h4>
      <div className='content'>
        <p className='intro'>Hello, My name is Jihye Kwak. I am a full stack developer based in San Francisco Bay Area. I recently finished 24-week full-stack web development immersive program covering modern, in-demand programming technologies and fundamental Computer Science knowledge at General Asembly. Previously, I have teaching experience and I've organized plans, strategies for the progress. I really enjoy learning, creating web services and solving problems. </p>
      </div>
    </>)}
  </div>
  )
}

export default Intro