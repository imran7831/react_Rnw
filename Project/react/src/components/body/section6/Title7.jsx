import React from 'react'
import Card from './Card'
import Cardd from './Cardd'
import Box from '../section5/Box'

const Title7 = () => {
  return (
    <div className='s6'>
        <div className='t2 text-center'>
            <h2>What Our Travelers Say</h2>
        </div>
        <div className='text-center'>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
        </div>
        <div className='setcardd d-flex'>
            <Card/>
            <Cardd/>
            <Card/>
            <Cardd/>
        </div>
        <div>
            <Box/>
        </div>
    </div>
  )
}

export default Title7