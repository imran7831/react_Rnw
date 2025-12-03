

const Text = () => {
  return (
    <div className='text position-absolute'>
        <h2>
            Discover
            <img src="../src/assets/images/banner-info.gif" alt="" />
            Your Next
        </h2>
        <h2 className="with">
            Adventure 
            <span>With</span>
        </h2>
       <div className='title d-flex col-9 justify-content-between'>
        <h2 className='col-3'>
          Touex!
        </h2>
        <div className='col-7 para'>
            <p>Discover tours tailored to your dream destinations — from cultural escapes to adventure getaways. Book in minutes, travel without limits.</p>
            <button>Choose a Destinations</button>
        </div>
       </div>
    </div>
  )
}

export default Text