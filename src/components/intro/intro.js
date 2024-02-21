import React from 'react'
import './intro.css'
import bg from '../../assets/bg.png'
import { Link } from 'react-scroll'
import hireMebtn from '../../assets/hireme.png'

const Intro = () => {
  return (
    <div>
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Shashank</span><br/>Software Developer</span>
                <p className='introPara'>Enthusiastic and results-driven Computer Science graduate. <br/>My passion lies in front-end development and user interface design, <br/>where I have honed my skills in React.js, JavaScript, HTML, CSS, and <br/>Adobe Experience Manager (AEM).</p>
                <Link className='resumeLink' target='_blank'><button className='btn'><img className='btnImg' src={hireMebtn} alt=''/>Hire Me</button></Link>
            </div>
            <img src={bg} alt=''className='bg'/>
        </section>
      
    </div>
  )
}

export default Intro
