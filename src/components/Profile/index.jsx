import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {
  return (
    <div className="left-bg">
        <div className='left-inner'>
            <div className="info">
                <h2>Hello, I'm Jihye Kwak</h2>
                <h3>Full stack developer</h3>
                <div className='social-link'>
                    <a href="#">
                    <FontAwesomeIcon icon={ faGithub } size="2x" />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={ faInstagram } size="2x"/>
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={ faLinkedin } size="2x" />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon={ faEnvelope } size="2x"/>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile