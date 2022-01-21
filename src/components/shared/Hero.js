import { Link } from 'react-router-dom';
import Button from './Button';
import './Hero.css';

const Hero = ({lightBg, lightText, lightTextDesc, head, desc, btnLabel, imgLeft, img, alt}) => {
  return (
    <>
      <div className={lightBg ? "home" : "home darkBg"}>
        <div className="container">
          <div 
            className="row home-row"
            style={{
              display: "flex",
              flexDirection: imgLeft === "start" ? "row-reverse" : "row",
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
                <img src={img} alt={alt} className='image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;