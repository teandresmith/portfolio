import React from 'react'
import './About.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const About = () => {
  return (
    <>
      <div className='about-wrapper'>
        <h2 className='header-text'>
          Hi, I'm <span className='name-text'>Te'Andre Smith.</span>
        </h2>
        <h4 className='title-text'>A Software Engineer.</h4>
        <div className='details-text-wrapper'>
          <div className='details-text'>
            I'm a self-motivated engineer with over 2 years of IT experience
            with the US Air Force. Technically-savvy offering the ability to
            quickly learn new concepts, software, and technology.
          </div>
        </div>
        <div className='quick-contact-group'>
          <div className='contact-icon-container'>
            <a
              href='https://drive.google.com/file/d/1wDIhyf2ZosfO5Lg5IYHV-kWc7J6lrzUn/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='resume-button'
            >
              <div>View My Resume</div>
            </a>
            <a
              href='https://github.com/teandresmith'
              target='_blank'
              rel='noreferrer'
              className='contact-icon'
            >
              <GitHubIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/teandre-smith/'
              target='_blank'
              rel='noreferrer'
              className='contact-icon'
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
