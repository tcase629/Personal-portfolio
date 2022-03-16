import './project.css';
import React from 'react';
import { Button } from '../shared/Button';

const Project = () => {
  return (
    <>
      <div className="project-section" id="project">
        <div className="project-wrapper">
          <h1 className="project-heading">Projects</h1>
          <p className="project-summary">A collection of the many projects I've finished or am currently working on</p>
          <div className="project-container">
            <a href="https://github.com/tcase629/tip-calculator" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-cardInfo">
                <img className='project-image' src="images/calculator.jpg" alt="calculator" />
                <h3>Tip Calculator</h3>
                <p>A simple calculator to know how much to tip.  Project created to practice vanilla javascript, HTML and CSS layout skills.</p>
                <ul className="techstack">
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  View Project
                </Button>
              </div>
            </a>
            <a href="https://github.com/tcase629/coach_assist" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-cardInfo">
                <img className='project-image' src="images/CoachAssist.jpeg" alt="Coach Assist" />
                <h3>Coach Assist</h3>
                <p>An application that keeps track of your team! Features include league information, schedules, player stats and even the ability to plan and organize post game treats for the kids.</p>
                <ul className="techstack">
                  <li>React</li>
                  <li>Ruby</li>
                  <li>PostgreSQL</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  View Project
                </Button>
              </div>
            </a>
            <a href="https://github.com/henry-doan/potluck-planner-fall21" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-cardInfo">
                <img className='project-image' src="images/potluck.jpeg" alt="potluck planner" />
                <h3>Potluck Planner</h3>
                <p>An application that helps you plan your next potluck with the abilities to assign food items to bring to an event.  App was made as part of a team final portfolio project at DevPoint Labs.</p>
                <ul className="techstack">
                  <li>React</li>
                  <li>Ruby</li>
                  <li>PostgreSQL</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
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