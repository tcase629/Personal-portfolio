import './home.css';
import { homeObjOne } from './Data';
import Hero from '../shared/Hero';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
    </>
  )
}

export default Home;