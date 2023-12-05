import React , { useState , createContext , useContext } from 'react'
import { Bots} from '../components/Bots'
import { Chats } from '../components/Chats'

export const UserContext = createContext(null);

const Home = () => {
  const [ai , setAi] = useState(true)
  const [display,setDisplay] = useState(true)

  console.log(ai)
  return (
    <UserContext.Provider value={{ai,setAi ,display , setDisplay}}>
      <div className='home'>
      <div className='container'>
        <div className='home_container'>
          <div className={`bots ${display ? 'bots' : 'mobile_bots'}`} ><Bots/></div>
          <div className={`chats ${display ? 'mobile_chats' : 'chats'}`}> <Chats/> </div>
        </div>
      </div>
    </div>
    </UserContext.Provider>
    
  )
}

export default Home