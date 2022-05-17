import React from 'react'

const Skills = () => {
  return (
    <div className='section'>
      <h4>Skills</h4>
      <div className='content'>
        <div className='skill-category'>
            <strong>Languages</strong>
            <span>: JavaScript (ES6), HTML5, CSS3, Python</span>
        </div>
        <div className='skill-category'>
            <strong>Libraries & Frameworks</strong>
            <span>: jQuery, Bootstrap, Material-UI, Node, Express, React, Django</span>
        </div>
        <div className='skill-category'>
            <strong>Databases</strong>
            <span>: MongoDB, postgreSQL</span>
        </div>
        <div className='skill-category'>
            <strong>Tools</strong>
            <span>: Git & Github, Command Line, Postman, Heroku</span>
        </div>
      </div>
    </div>
  )
}

export default Skills