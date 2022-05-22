import React from "react"

const Skills = (props) => {
  return (
    <div className='section'>
      <h4>{props.language === "korean" ? "기술 스택" : "Skills"}</h4>
      <div className='content'>
        {props.language === "korean" ? (
          <>
            <div className='skill-category'>
              <strong>프로그래밍 언어</strong>
              <span>: Python, JavaScript (ES6), HTML5, CSS3</span>
            </div>
            <div className='skill-category'>
              <strong>라이브러리 & 프레임워크</strong>
              <span>
                : Django, React, Nodejs, Express, jQuery, Bootstrap, Material-UI
              </span>
            </div>
            <div className='skill-category'>
              <strong>데이터베이스</strong>
              <span>: MongoDB, PostgreSQL</span>
            </div>
            <div className='skill-category'>
              <strong>개발 툴</strong>
              <span>: Git & Github, Command Line, Postman, Heroku</span>
            </div>
          </>
        ) : (
          <>
            <div className='skill-category'>
              <strong>Languages</strong>
              <span>: JavaScript (ES6), HTML5, CSS3, Python</span>
            </div>
            <div className='skill-category'>
              <strong>Libraries & Frameworks</strong>
              <span>
                : jQuery, Bootstrap, Material-UI, Node, Express, React, Django
              </span>
            </div>
            <div className='skill-category'>
              <strong>Databases</strong>
              <span>: MongoDB, postgreSQL</span>
            </div>
            <div className='skill-category'>
              <strong>Tools</strong>
              <span>: Git & Github, Command Line, Postman, Heroku</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Skills
