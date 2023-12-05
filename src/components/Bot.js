import React, { useContext, useState } from 'react'
import photo from '../images/gon1.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../pages/Home'

const Bot = () => {
  const { ai , setAi , display, setDisplay} = useContext(UserContext)
  
  return (
    <div className='bot'>
        <Link onClick={() => {
            setAi(true)
            setDisplay(false)
            }}>
            <div className='user'>
            <img className='pro' src={photo} /> 
            <div className='username' >
                <div>ChatGPT</div>
                <div className='last_text'>hello</div>  
            </div>
          </div>
        </Link>
        <Link onClick={() => {
            setAi(false)
            setDisplay(false)
            console.log(display)
        }} >
            <div className='user'>
                <img className='pro' src={photo} /> 
                <div className='username' >
                    <div>Bard</div>
                    <div className='last_text'>hello</div> 
                </div>
            </div>
        </Link>
       
        <hr className='line'></hr>
    </div>
  )
}

export default Bot