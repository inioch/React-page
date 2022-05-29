import React from 'react'
import placeholder from '.././Img/placeholder.jpg'

const Makeup = () => {
  return (
    <>
    <div className='pazhead'>
    <div className='pazleft'>
      <img alt='placeholder' src={placeholder}></img>
    </div>
    <div className='pazright'>
      <p>Makijaż wieczorowy to makijaż okolicznościowy, 
        który wykonuje się na specjalne okazje. 
        Jest on zdecydowanie bardziej wyrazisty niż makijaż dzienny.
         Do jego wykonania używa się ciemniejszych niż zwykle podkładów,
          nasyconych cieni, 
        kosmetyków dających efekt blasku, brokatu.</p>
    </div>
    </div>
 
    </>
  )
}

export default Makeup