import "./App.css";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import {useState} from "react"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [language, setLanguage] = useState("english");

  return (
    <div className="app">
      <div className="left">
        <Profile language={language}/>
      </div>
      <div className="right">
        <div className="language-toggle">
          <FontAwesomeIcon icon={faGlobe} size="1x" className="language-icon"/>
          <select onChange={(e)=>setLanguage(e.target.value)}>
            <option>Language</option>
            <option value="english">English</option>
            <option value="korean">Korean</option>
          </select>
          {/* <button className='language-button' onClick={handleSubmit}>{kor? (<><span>English</span><FontAwesomeIcon icon={faGlobe} size="1x" /></>): (<><span>Korean</span><FontAwesomeIcon icon={faGlobe} size="1x" /></>)}</button> */}
        </div>
        <div className="right-inner">
          <Intro language={language}/>
          <Skills language={language}/>
          <Education language={language}/>
          {/* <Experience /> */}
          <Projects language={language}/>
          <Resume language={language}/>
        </div>
      </div>
    </div>
  );
}

export default App;
