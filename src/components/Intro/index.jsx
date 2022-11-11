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
        <p className='intro'>My name is Jihye Kwak, a full stack developer based in San Francisco Bay Area. I recently completed the 24-week full-stack web development immersive program by General Assembly. Learnings include in-demand modern programming technologies, fundamental computer science knowledge, and multilateral teamwork environment. I realized how much I enjoy learning new languages, applying it to a visible format, creating different web services, and understanding the hidden details of the websites I use. </p>
      </div>
    </>)}
  </div>
  )
}

export default Intro