import React from 'react'
import './quiz2.css'

const Quiz2 = () => {
    const currentDate = new Date().toISOString().substring(0,10)
  return (
    <div className='container'>
        <div>
            <label>Your full given name</label>
            <input type='text' placeholder='John Doe' />
        </div>
        <div className='two-column'>
        <div>
            <label>Date of Birth</label>
            <input type='date' value={currentDate}  min="1997-01-01" max="2030-12-31" />
        </div>
        <div>
            <label>Country of residence or citizenship</label>
            <input type='text' placeholder='Canada' />
        </div> 
        </div>
        <div>
            <label>Please take a moment to describe your intended area of study</label>
            <textarea className='description' placeholder='Enter details here' />
        </div>
    </div>
  )
}

export default Quiz2