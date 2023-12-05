import React, { useContext, useEffect, useState } from 'react'
import Chatbar from './Chatbar'
import Send from './Send'
import Chat from './Chat'
import Chat2 from './Chat2'
import { UserContext } from '../pages/Home'



export const Chats = () => {
  const { ai } = useContext(UserContext)
  return ( 
    <div className='chat_container' >
        <div className='chatbar'> <Chatbar /> </div>
        <div className='chat'> {ai ? <Chat/> : <Chat2/> } </div>
        <div className='send'><Send/></div>
    </div>
  )
}
