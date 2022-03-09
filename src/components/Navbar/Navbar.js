import React, { useState } from 'react'
import './Navbar.css'
import { useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const onClick = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const hamburger = () => {
    return (
      <>
        <div
          className={open ? 'nav-menu active' : 'nav-menu'}
          onClick={() => onClick()}
        >
          <MenuIcon />
        </div>
        {open ? (
          <div className='mobile-menu'>
            <ul className='nav-list'>
              <li className='nav-list-item' onClick={() => onClick()}>
                <a href='#projects'>projects</a>
              </li>
              <li className='nav-list-item ' onClick={() => onClick()}>
                <a href='#skills'>skills</a>
              </li>
              <li className='nav-list-item ' onClick={() => onClick()}>
                <a href='#contact'>contact</a>
              </li>
              <li className='nav-list-item ' onClick={() => onClick()}>
                <a
                  href='https://injapan.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  blog
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </>
    )
  }
  return (
    <nav className='nav-container'>
      <div className='logo'>TMS.</div>
      <div>
        {matches ? (
          hamburger()
        ) : (
          <ul className='nav-list'>
            <li className='nav-list-item '>
              <a href='#projects'>projects</a>
            </li>
            <li className='nav-list-item '>
              <a href='#skills'>skills</a>
            </li>
            <li className='nav-list-item '>
              <a href='#contact'>contact</a>
            </li>
            <li className='nav-list-item '>
              <a
                href='https://injapan.netlify.app'
                target='_blank'
                rel='noreferrer'
              >
                blog
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
