import React from 'react'

const Rating = () => {
  return (
    <div className='container'>
       <div className='rating justify-content-between col-12 d-flex'>
          <div className='col-4 text-center'>
           <i class="bi bi-star-fill"></i>
           <span>4.8/5 (10K+ Reviews)</span> 
          </div>
          <div className='col-4 text-center'>
             <i class="bi bi-globe"></i>
             <span>Trusted by 500K+ Travelers</span> 
          </div>
          <div className='col-4 text-center'>
            <i class="bi bi-bag-fill"></i>
            <span>Secure Booking</span> 
          </div>
       </div>
    </div>
  )
}

export default Rating