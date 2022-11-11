import React from 'react'

const Resume = (props) => {
  return (
    <a href="https://docs.google.com/document/d/1Kvfblt-FWlTU3qfSoZQhsZPZFfzmRO6WyQsVF6bZ7EQ/edit?usp=sharing" className='resume-link'>
      {props.language === "korean"? (
      <div className='resume-button'>이력서 다운로드</div>
      ):(
      <div className='resume-button'>Grab a pdf of my resume</div>)}
    </a>
  )
}

export default Resume