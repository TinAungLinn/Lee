import React from 'react'

const HeroText = ({heroText}) => {
  return (
    <div className=' hero flex justify-center items-center w-screen h-80'>
        <h1 className='text-6xl font-semibold text-slate-50'>{heroText}</h1>
    </div>
  )
}

export default HeroText