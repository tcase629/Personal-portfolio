
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Hero from '../shared/Hero';
import Project from '../projects/Project';
import Skills from '../shared/Skills';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Skills {...homeObjThree} />
      <Project />
      <Hero {...homeObjFour} />
    </>
  )
}

export default Home;