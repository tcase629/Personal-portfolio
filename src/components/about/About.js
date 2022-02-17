import './about.css';
import Hero from '../shared/Hero';
import { homeObjTwo } from '../home/Data';

const About = () => (
  <div className="about" id="about">
    <Hero {...homeObjTwo} />
  </div>
)

export default About;