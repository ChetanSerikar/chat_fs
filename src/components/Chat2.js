import React from 'react'
import photo from '../images/gon1.png'

const Chat2 = () => {
  return (
    <div className='chat_container'>
    <div className='text'>
      <img src={photo} />
      <div className='text_back'>hello</div>
    </div>
    <div className='text1'>
      <img src={photo} />
      <div className='text_back1'>hello I am Bard</div>
    </div>
    
  </div>
  )
}

export default Chat2