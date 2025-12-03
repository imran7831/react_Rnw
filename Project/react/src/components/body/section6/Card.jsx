import React from 'react'

const Card = () => {
  return (
    <div className='card'>
       <div>
        <p>“Our family vacation to Bali was absolutely perfect thanks to Touex. The hotels were excellent. The kids had a blast and we didn't have to worry about a thing!”</p>
       </div>
       <div className='star'>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
       </div>
       <div>
        <div className='d-flex '>
            <div className="log d-flex align-items-center justify-content-center">
               <i class="bi bi-braces"></i>
            </div>
            <h4>Aaron Williamson</h4>
            <span>Family Vacation, Bali</span>
        </div>
       </div>
    </div>
  )
}

export default Card