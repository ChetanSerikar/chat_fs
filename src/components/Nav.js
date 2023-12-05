import React from 'react'
import { Link } from 'react-router-dom'
import explore from '../images/explore.svg'
import edit from '../images/edit.svg'
import create from '../images/create.svg'



const Nav = () => {
  return (
    <header >
        <nav className='navbar'>
            <div className='container'>
                <div className='links'>
                    <Link className='logo' to='/'>
                        <div className='logo1'>LOGO</div>   
                        <div className='dash'>|</div>
                    </Link>
                    <Link to='explore'><img src={explore}/>  Explore</Link>
                    <Link to='create' ><img src={edit} />Create</Link>
                    <Link to='edit'><img src={create} />Edit</Link>
                </div>
                <div className='login'>
                    <Link to='login1'>Login</Link>
                </div>
                
                <div class="toggle_btn ">
                    <i class="i fa-solid fa-bars" ></i>
                </div>
              
            </div>
        </nav>
        

    </header>
  )
}

export default Nav