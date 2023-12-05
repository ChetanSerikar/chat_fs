import React, { useContext } from 'react'
import back from '../images/back.svg'
import trash from '../images/trashbin.svg'
import photo from '../images/gon1.png'
import { UserContext } from '../pages/Home'
import Login from '../pages/Login'
import Explore from '../pages/Explore'
import Ai1 from './Ai1'
import Ai2 from './Ai2'

const Chatbar = () => {
  const { ai,setAi,setDisplay } = useContext(UserContext)
  return (
    <div className='chartbar_container'>
      <div className='user'>
        {ai ? <Ai1/> : <Ai2/> }
      </div>
      <div className='buttons' >
        <div onClick={() => setDisplay(true)}><img src={back}/>Back</div>
        <div><img src={trash} />Delete</div>
      </div>
    </div>
  )
}

export default Chatbar