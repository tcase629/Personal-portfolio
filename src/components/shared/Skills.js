import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Skills.css';

const Skills = ({
  lightBg, 
  lightText, 
  lightTextDesc, 
  head, 
  desc, 
  btnLabel, 
  imgLeft, 
  img1,
  img2, 
  img3, 
  img4, 
  img5, 
  img6, 
  img7, 
  img8, 
  alt
}) => {
  return (
    <>
      <div className={lightBg ? "home" : "home darkBg"}>
        <div className="container">
          <div 
            className="row home-row"
            style={{
              display: "flex",
              flexDirection: imgLeft === "left" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="text-wrap">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {head}
                </h1>
                <p className={ lightTextDesc ? "description" : "description dark"}>
                  {desc}
                </p>
                <Link to=''>
                  <Button>
                    {btnLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="img-wrap">
                <img src={img1} alt={alt} className='image'/>
                <img src={img2} alt={alt} className='image'/>
                <img src={img3} alt={alt} className='image'/>
                <img src={img4} alt={alt} className='image'/>
                <img src={img5} alt={alt} className='image'/>
                <img src={img6} alt={alt} className='image'/>
                <img src={img7} alt={alt} className='image'/>
                <img src={img8} alt={alt} className='image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;