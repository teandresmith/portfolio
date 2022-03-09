import React from 'react'
import './Contact.css'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'

const Contact = () => {
  return (
    <>
      <div className='contact-component'>
        <h3 id='contact' className='contact-header'>
          Contact Me
        </h3>
        <div className='contact-subheader'>I would love to chat!</div>
        <section className='contact-container'>
          <div className='contact-left'>
            <div className='contact-name'>Te'Andre Smith</div>
            <div className='contact-location'>Tokyo, Japan</div>
            <div className='contact-email-container'>
              <a
                href='mailto: teandre3smith@gmail.com'
                className='contact-email'
              >
                teandre3smith@gmail.com
              </a>
            </div>
            <div>
              <a
                className='contact-resume'
                href='https://drive.google.com/file/d/1MeTLB2A4LcOoC1D9HXH2kVu04YG_w-Ri/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                My Resume
              </a>
            </div>
          </div>

          <div className='contact-right'>
            <div className='contact-link-button'>
              <a
                href='https://www.linkedin.com/in/teandre-smith/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='contact-button-info'>
                  <LinkedIn />
                  <div className='contact-link-info'>LinkedIn</div>
                </div>
              </a>
            </div>
            <div className='contact-link-button'>
              <a
                href='https://github.com/teandresmith'
                target='_blank'
                rel='noreferrer'
              >
                <div className='contact-button-info'>
                  <GitHub />
                  <div className='contact-link-info'>Github</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
