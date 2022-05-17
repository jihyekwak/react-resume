import React from "react";

const Projects = () => {
  return (
    <div className="section">
        <h4>Relavant Experience</h4>
        <div className="content">
            <div className="project-item">
                <div className="project-title">
                <a href="https://github.com/jihyekwak/project-5-lovetolearn"><strong>Love To Learn</strong></a>
                </div>
                <div className="project-desc">
                    <ul>
                        <li><p>Built learning quiz app for young age students, utilizing postgreSQL for database, Django rest framework for backend, React for frontend and Material UI. </p></li>
                        <li><p>Adult user can sign up and login with JWT authentication and create student users. User can create, edit, and delete quizzes and questions for personlized learning.</p></li>
                    </ul>
                </div>
            </div>
            <div className="project-item">
                <div className="project-title">
                    <a href="https://github.com/jihyekwak/project-4-travellovers"><strong>Travel Lovers</strong></a>
                </div>
                <div className="project-desc">
                    <ul>
                        <li><p>Built travel planner, utilizing porstgreSQL for database and Django for backend and frontend. </p></li>
                        <li><p>User can login and create travel planner with family and friends, the planner includes itineraries and checklists. And also user can leave comments, so that the users can share their plans and leave all memories.</p></li>
                    </ul>
                </div>
            </div>
            <div className="project-item">
                <div className="project-title">
                <a href="https://github.com/mbahan1/project-3-sapling"><strong>Sapling</strong></a>
                </div>
                <div className="project-desc">
                    <ul>
                        <li><p>Built social media application, utilizing mongoDB for database, Express, Node.js for backend and React for frontend. </p></li>
                        <li><p>The concept of the app is manifestation to the world for personal growth and share the ideas with other users. User can login with Google Oauth and create, edit, and delete posts, comments. And users can get proper advices from API service.</p></li>
                    </ul>
                </div>
            </div>
            <div className="project-item">
                <div className="project-title">
                <a href="https://github.com/preteyz/Project-2-web-app"><strong>Foodgram</strong></a>
                </div>
                <div className="project-desc">
                    <ul>
                        <li><p>Built a full stack web application, utilizing mongoDB for database, Express, Node.js for backend and frontend. </p></li>
                        <li><p>The concept of the app is social media application regarding food. User can login with Google Oauth and create, edit, and delete posts, tags, and comments with images.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Projects;
