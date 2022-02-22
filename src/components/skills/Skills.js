import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../shared/Button';
import './Skills.css';

const Skills = () => {
  return (
    <>
      <div className="home darkBg" id="skills">
        <div className="container">
          <div 
            className="row home-row"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="col">
              <div className="text-wrap">
                <h1 className="heading">
                  Skills
                </h1>
                <p className="description">
                  Here are some of the things I'm using to continually build brain matter
                </p>
                <Link to=''>
                  <Button>
                    Find Out More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="icon-wrap">
                <img src='images/JS.png' alt='' className='image'/>
                <img src='images/css.png' alt='' className='image'/>
                <img src='images/html.png' alt='' className='image'/>
                <img src='images/React.png' alt='' className='image'/>
                <img src='images/ruby.png' alt='' className='image'/>
                <img src='images/rails.png' alt='' className='image'/>
                <img src='images/postgresql.png' alt='' className='image'/>
                <img src='images/git.png' alt='' className='image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;