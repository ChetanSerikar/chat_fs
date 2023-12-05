import React from 'react'
import plus from '../images/add.svg'
import chat from '../images/chat.svg'
import { Chat } from './Chat'
import Bot from './Bot'

export const Bots = () => {
  return (
    < >
        <div className='title'>ALL YOUR CHARTS</div>
        <div className='chat_image' ><div className='c'> <img src={chat}/>Chats images : ON</div></div>
        <div className='p'>When a bot sends you images, you will be charged one secondary image</div>
        <div className='users'> <Bot/> </div>
        <div className='add'><img   src={plus}  />Add new chat-bot</div>
    </>
  )
}
