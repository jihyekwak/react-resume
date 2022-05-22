import React from "react";

const Education = (props) => {
  return (
    <div className="section">
      <h4>{props.language === "korean" ? "교육" : "Education"}</h4>
      <div className="content">
        {props.language === "korean" ? (
        <>
          <div className="education-list">
          <div className="education-info">
            <div className="university"><strong>General Assembly</strong></div>
            <div className="university-location">샌프란시스코, 캘리포니아</div>
          </div>
          <div className="major">
            <p><strong>소프트웨어 엔지니어링 플렉스 프로그램 </strong></p>
            <div className="university-date">2021-2022</div>
          </div>
          <div className="major-desc">
            <p>최신 경향의 프로그래밍 기술과 기본적인 컴퓨터 과학 지식을 다루는 24주 풀스택 웹 개발 부트캠프 프로그램 수료</p>
          </div>
        </div>

        <div className="education-list">
          <div className="education-info">
            <div className="university"><strong>이화 여자 대학교</strong></div>
            <div className="university-location">서울, 한국</div>
          </div>
          <div className="major">
            <div>
              <p><strong>생명과학 전공</strong></p>
              <p><strong>경제학 복수전공</strong></p>
            </div>
          </div>
        </div>
        </>):(
        <>
          <div className="education-list">
            <div className="education-info">
              <div className="university"><strong>General Assembly</strong></div>
              <div className="university-location">San Francisco, CA</div>
            </div>
            <div className="major">
              <p><strong>Software Engineering Flex Program </strong></p>
              <div className="university-date">2021-2022</div>
            </div>
            <div className="major-desc">
              <p>24-week full-stack web development immersive program covering modern, in-demand programming technologies and fundamental Computer Science knowledge.</p>
            </div>
          </div>

          <div className="education-list">
            <div className="education-info">
              <div className="university"><strong>Ewha Women University</strong></div>
              <div className="university-location">Seoul, South Korea</div>
            </div>
            <div className="major">
              <div>
                <p><strong>Bachelor's Degree of Bio Science </strong></p>
                <p><strong>Bachelor's Degree of Economics </strong></p>
              </div>
            </div>
          </div>
        </>)}
        
      </div>
    </div>
  );
};

export default Education;
