import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './hero.css';

const Hero = ({lightBg, lightText, lightTextDesc, head, desc, btnLabel, imgLeft, img, img2, img3, img4, img5, img6, img7, img8, alt}) => {
  return (
    <>
      <div className={lightBg ? "home__hero" : "home__hero darkBg"} id="home">
        <div className="container">
          <div 
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgLeft === "left" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line"></div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {head}
                </h1>
                <p className={ lightTextDesc ? "home__hero-subtitle" : "home__hero-subtitle dark"}>
                  {desc}
                </p>
                <Link to='/contactForm' target="_blank">
                  <Button buttonSize="btn--wide" bottonColor="blue">
                    {btnLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;