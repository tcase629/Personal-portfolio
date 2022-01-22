
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Hero from '../shared/Hero';
import Project from '../projects/Project';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjThree} />
      <Project />
      <Hero {...homeObjFour} />
    </>
  )
}

export default Home;