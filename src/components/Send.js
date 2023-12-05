import React from 'react'
import send from '../images/send.svg'

const Send = () => {
  return (
    <div className='send_container'>
        <input  className='input'/>
        <div className='enter'> <img src={send} /></div>
       
    </div>
  )
}

export default Send