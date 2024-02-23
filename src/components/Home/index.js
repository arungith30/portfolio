import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import ProfilePic from '../../assets/images/image.png'


import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'r', 'u', 'n', ' ','k', 'u', 'm','a','r']
  const jobArray = [
  
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _12`}></span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
             <img
             className='initial-pic'
              src={LogoTitle}
              alt="JavaScript Developer"
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2>React / JavaScript  / Node </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href="/resume.pdf" className="flat-button"download="resume.pdf">
            RESUME
          </a>

        </div>
        <div className ="picture-class">
            <img className='profile-pic'
              src={ProfilePic}
              alt="JavaScript Developer "
            />
        </div>
       
      </div>
     
      <Loader type="pacman" />
    </>
  )
}

export default Home