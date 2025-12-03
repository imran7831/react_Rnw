import Contact from './Contact';
import Offer from './Offer';
import Social from './Social'
import Language from './Language';

const Subnav = () => {
  return (
    <>
    <div className='nav-bg bg-primary text-white d-flex align-items-center justify-content-between p-3'>
      <Contact/>
      <Offer/>
      <Social/>
      <Language/>
    </div>
    </>
  )
}

export default Subnav