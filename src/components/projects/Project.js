import './project.css';
import React from 'react';
import Button from '../shared/Button';

const Project = () => {
  return (
    <>
      <div className="project-section">
        <div className="project-wrapper">
          <h1 className="project-heading">Projects</h1>
          <p className="project-summary">A collection of the many projects I've finished or am currently working on</p>
          <div className="project-container">
            <a href="https://github.com/tcase629/tip-calculator" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-cardInfo">
                <img src="images/me.jpeg" alt="me" />
                <h3>Tip Calculator</h3>
                <p>A simple calculator to calculate how much to tip.</p>
                <ul className="techstack">
                  <li>React</li>
                  <li>Ruby</li>
                  <li>PostgreSQL</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  View Project
                </Button>
              </div>
            </a>
            <a href="https://github.com/tcase629/coach_assist" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-cardInfo">
                <img src="" alt="" />
                <h3>Project Name</h3>
                <p>project description</p>
                <ul className="techstack">
                  <li>React</li>
                  <li>Ruby</li>
                  <li>PostgreSQL</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  View Project
                </Button>
              </div>
            </a>
            <a href="https://github.com/tcase629/Personal-portfolio" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-cardInfo">
                <img src="" alt="" />
                <h3>Project Name</h3>
                <p>project description</p>
                <ul className="techstack">
                  <li>React</li>
                  <li>Ruby</li>
                  <li>PostgreSQL</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  View Project
                </Button>
              </div>
            </a>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Project;