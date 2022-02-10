import './project.css';
import React from 'react';
import Button from '../shared/Button';

const Project = ({lightBg, lightText, lightTextDesc, head, desc, img1, img2, img3, alt, title1, title2, title3, cardDesc1, cardDesc2, cardDesc3, btnLabel}) => {
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
            <div className="col-top">
              <div className="text-wrap">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {head}
                </h1>
                <p className={ lightTextDesc ? "description" : "description dark"}>
                  {desc}
                </p>
              </div>
            </div>
            <div className="col-bottom">
              <div className="card-wrap">
                <img src={img1} alt={alt} className='image'/>
                <div className="card-text">
                  <h3 className={lightText ? "heading" : "heading dark"}>
                    {title1}
                  </h3>
                  <p className={ lightTextDesc ? "description" : "description dark"}>
                    {cardDesc1}
                  </p>
                  <Button>
                    {btnLabel}
                  </Button>
                </div>
              </div>
              <div className="card-wrap">
                <img src={img2} alt={alt} className='image'/>
                <div className="card-text">
                  <h3 className={lightText ? "heading" : "heading dark"}>
                    {title2}
                  </h3>
                  <p className={ lightTextDesc ? "description" : "description dark"}>
                    {cardDesc2}
                  </p>
                  <Button>
                    {btnLabel}
                  </Button>
                </div>
              </div>
              <div className="card-wrap">
                <img src={img3} alt={alt} className='image'/>
                <div className="card-text">
                  <h3 className={lightText ? "heading" : "heading dark"}>
                    {title3}
                  </h3>
                  <p className={ lightTextDesc ? "description" : "description dark"}>
                    {cardDesc3}
                  </p>
                  <Button>
                    {btnLabel}
                  </Button>
                </div>
              </div>
              <div className="card-wrap">
                <img src={img1} alt={alt} className='image'/>
                <div className="card-text">
                  <h3 className={lightText ? "heading" : "heading dark"}>
                    {title1}
                  </h3>
                  <p className={ lightTextDesc ? "description" : "description dark"}>
                    {cardDesc1}
                  </p>
                  <Button>
                    {btnLabel}
                  </Button>
                </div>
              </div>
              <div className="card-wrap">
                <img src={img2} alt={alt} className='image'/>
                <div className="card-text">
                  <h3 className={lightText ? "heading" : "heading dark"}>
                    {title2}
                  </h3>
                  <p className={ lightTextDesc ? "description" : "description dark"}>
                    {cardDesc2}
                  </p>
                  <Button>
                    {btnLabel}
                  </Button>
                </div>
              </div>
              <div className="card-wrap">
                <img src={img3} alt={alt} className='image'/>
                <div className="card-text">
                  <h3 className={lightText ? "heading" : "heading dark"}>
                    {title3}
                  </h3>
                  <p className={ lightTextDesc ? "description" : "description dark"}>
                    {cardDesc3}
                  </p>
                  <Button>
                    {btnLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;