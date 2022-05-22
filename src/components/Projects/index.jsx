import React from "react";

const Projects = (props) => {
  return (
    <div className="section">
        <h4>{props.language === "korean"? "관련경험" : "Relavant Experience"}</h4>
        <div className="content">
            {props.language === "korean"? (
            <>
                <div className="project-item">
                    <div className="project-title">
                    <a href="https://github.com/jihyekwak/project-5-lovetolearn"><strong>Love To Learn</strong></a>
                    </div>
                    <div className="project-desc">
                        <ul>
                            <li><p>학생들을 위한 맞춤형 교육 퀴즈 웹 어플케이션 개발</p></li>
                            <li><p>사용자는 학생을 생성, 수정, 삭제할 수 있고 데시보드에서 퀴즈, 문제, 답을 직접 만들고 수정, 삭제할 수 있음. 학생의 모든 정보와 퀴즈 결과 리포트를 사용자의 데시보드에서 확인할 수 있음. </p></li>
                            <li><p>장고 레스트 프레임워크와 포스트그레시퀄 데이터베이스를 사용하여 백엔드를 구현하였고 JWT 인증방식을 사용해 로그인 기능을 구현. 리액트 프레임워크와 머터리얼 유아이를 사용해 프론트 앤드 개발.</p></li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-title">
                        <a href="https://github.com/jihyekwak/project-4-travellovers"><strong>Travel Lovers</strong></a>
                    </div>
                    <div className="project-desc">
                        <ul>
                            <li><p>여행을 사랑하는 사람들을 위한 여행 플래너 개발.</p></li>
                            <li><p>사용자는 여행지를 탐색하거나 새로운 여행지와 그에 대한 정보를 추가할 수 있고 다른 사용자와 함께 여행 계획을 세우고 공유할 수 있음. 여행 계획 과정에 전반적인 정보와 함께 매일 일정표를 추가하고 여행 체크리스트를 작성할 수 있으며 테그를 달아 분류가 가능하도록 함. 댓글 기능을 추가하여 여러 사용자가 의견을 공유할 수 있고, 여행의 모든 과정을 기록으로 남길 수 있음.</p></li>
                            <li><p>장고 프레임워크와 포스트그레시퀄 데이터베이스를 사용하여 백앤드와 프론트 앤드 풀스택 개발</p></li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-title">
                    <a href="https://github.com/mbahan1/project-3-sapling"><strong>Sapling</strong></a>
                    </div>
                    <div className="project-desc">
                        <ul>
                            <li><p>개인의 성장을 위한 선언문을 게시하고 공유할 수 있는 소셜 미디어 웹 어플리케이션 개발</p></li>
                            <li><p>사용자는 글을 게시, 공유할 수 있고 댓글과 좋아요 버튼을 통해 다른 사용자와 교류할 수 있음. 프로필 페이지에서 랜덤으로 명언 혹은 조언을 받을 수 있음. </p></li>
                            <li><p>익스프레스, 노드js, 몽고DB를 사용하여 사용자와 포스트, 댓글의 full CRUD가 가능한 백엔드를 개발하고 리액트를 사용하여 프론트앤드 개발. 구글OAuth 인증방식을 사용해 로그인 기능 구현하고 Heroku로 배포 </p></li>
                        </ul>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-title">
                    <a href="https://github.com/preteyz/Project-2-web-app"><strong>Foodgram</strong></a>
                    </div>
                    <div className="project-desc">
                        <ul>
                            <li><p>음식에 관한 사진과 정보를 공유하는 소셜 미디어 웹 어플리케이션 개발</p></li>
                            <li><p>사용자는 사진과 글, 테그를 포함한 글을 게시, 수정, 삭제할 수 있고 댓글을 통해 다른 사용자와 교류가 가능</p></li>
                            <li><p>익스트레스 노드js, 몽고DB를 사용하여 백앤드를 개발하고 ejs 템플릿을 활용해 프론트앤드를 개발. 구글OAuth 인증방식을 사용해 로그인 기능을 구현하였고 Heroku로 배포</p></li>

                        </ul>
                    </div>
                </div>
            </>):(
            <>
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
            </>)}
        </div>
    </div>
  );
};

export default Projects;
