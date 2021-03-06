
import { homeObjOne } from './Data';
import Hero from '../shared/Hero';
import Project from '../projects/Project';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import About from '../about/About';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default Home;