import Hero from './HeroSection/Hero'
import Section1 from './section1/Section'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Marquee from './marquee/Marquee'
import Marquee2 from './marquee/Marquee2'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import Section6 from './section6/Section6'
import Section7 from './section7/Section7'

const Body = () => {
  return (
    <div className='main-body'>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Marquee/>
      <Marquee2/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </div>
  )
}

export default Body