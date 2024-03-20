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
        <Link to='intro' activeClass="active" spy={true} 
        smooth={true} 
        duration={500} className='desktopMenuListItem'>Home</Link>
        <Link to='skills' activeClass="active" spy={true} 
        smooth={true} 
        duration={500}className='desktopMenuListItem'>About</Link>
        <Link to='works' activeClass="active"  spy={true} 
        smooth={true} 
        duration={500}  className='desktopMenuListItem'>Portfolio</Link>
       </div>
       <Link to='contact' activeClass="active"  spy={true} 
        smooth={true} 
        duration={500}  className=''>
       <button className='desktopMenuBtn'>
        <img src={contactimg} alt='contactMe' className='desktopMenuImg'/>Contact Me
       </button>

       </Link>
      </nav>
    )
}

export default Navbar;