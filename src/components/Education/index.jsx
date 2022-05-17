import React from "react";

const Education = () => {
  return (
    <div className="section">
      <h4>Education</h4>
      <div className="content">
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
      </div>
    </div>
  );
};

export default Education;
