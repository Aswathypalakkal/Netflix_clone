import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content' >
            <h1 className='title'>Movie Name</h1>
             <div className='banner_buttons'>

                <button className='button'>PLay</button>
                <button className='button'>My list</button>

                
             </div>
             <hl className='description'>here is the description </hl>
        
    
        </div>
      
    </div>
  )
}

export default Banner
