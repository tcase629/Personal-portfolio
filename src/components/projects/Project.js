import './project.css';
import React from 'react';

const Project = ({lightBg, lightText, lightTextDesc, head, desc, imgLeft, img, alt}) => {
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
              </div>
            </div>
            <div className="col">
              <div className="img-wrap">
                <img src={img} alt={alt} className='image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;