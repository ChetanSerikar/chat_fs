import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Bot from './Bot'
import photo from '../images/gon1.png'

const Chat = () => {
  return (
    <div className='chat_container'>
      <div className='text'>
        <img src={photo} />
        <div className='text_back'>hello</div>
      </div>
      <div className='text1'>
        <img src={photo} />
        <div className='text_back1'>hello I am ChatGPT</div>
      </div>
      
    </div>
  )
}

export default Chat