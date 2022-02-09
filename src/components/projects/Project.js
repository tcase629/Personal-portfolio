import './project.css';
import React from 'react';
import Button from '../shared/Button';

const Project = ({lightBg, lightText, lightTextDesc, head, desc, img, alt, title, cardDesc, btnLabel}) => {
  return (
    <>
      <div className={lightBg ? "home" : "home darkBg"}>
        <div className="container">
          <div 
            className="row home-row"
            style={{
              display: "flex",
              flexDirection: "column",
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
              <div className="card-wrap">
                <div className="img-wrap">
                  <img src={img} alt={alt} className='image'/>
                </div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {title}
                </h1>
                <p className={ lightTextDesc ? "description" : "description dark"}>
                  {cardDesc}
                </p>
                <Button>
                    {btnLabel}
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;