import "./App.css";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="app">
      <div className="left">
        <Profile />
      </div>
      <div className="right">
        <div className="right-inner">
          <Intro />
          <Skills />
          <Education />
          {/* <Experience /> */}
          <Projects />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
