import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Profile = (props) => {
  return (
    <div className="left-bg">
        <div className='left-inner'>
            <div className="info">
              {props.language === "korean"? (
              <>
                <h2>안녕하세요, 곽지혜입니다</h2>
                <h3>풀스택 개발자 입니다</h3>
              </>):(
              <>
                <h2>Hello, I'm Jihye Kwak</h2>
                <h3>Full stack developer</h3>
              </>)}
                <div className='social-link'>
                    <a href="https://github.com/jihyekwak">
                    <FontAwesomeIcon icon={ faGithub } size="2x" />
                    </a>
                    {/* <a href="#">
                    <FontAwesomeIcon icon={ faInstagram } size="2x"/>
                    </a> */}
                    <a href="https://www.linkedin.com/in/jihye-kwak/">
                    <FontAwesomeIcon icon={ faLinkedin } size="2x" />
                    </a>
                    <a href="mailto:jihyekwak53@gmail.com">
                    <FontAwesomeIcon icon={ faEnvelope } size="2x"/>
                    </a>
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default Profile