import React from 'react';
import './navbar.css';
import logo from '../../assets/S.png';
import contactimg from '../../assets/contact.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    return(
        <nav id="navbar" class="nav">
            <img src={logo} alt='logo' className='logo'/>
       <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
       </div>
       <button className='desktopMenuBtn'>
        <img src={contactimg} alt='contactMe' className='desktopMenuImg'/>Contact Me
       </button>

      </nav>
    )
}

export default Navbar;