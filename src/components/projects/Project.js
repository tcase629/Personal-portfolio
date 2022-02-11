import './project.css';
import React from 'react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <>
      <div className="project-section">
        <div className="project-wrapper">
          <h1 className="project-heading">Projects</h1>
          <p className="project-summary">A collection of the many projects I've finished or am currently working on</p>
          <div className="project-container">
            <Link to={{ pathname: ""}} target="_blank" className="project-card">
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
            </Link>
            <Link to={{ pathname: ""}} target="_blank" className="project-card">
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
            </Link>
            <Link to={{ pathname: ""}} target="_blank" className="project-card">
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
            </Link>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Project;