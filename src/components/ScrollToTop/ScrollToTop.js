import React, { useEffect, useState } from 'react'
import { ArrowUpward } from '@mui/icons-material'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [top, setTop] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    setScrollTop(winScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    if (scrollTop > 25) {
      setTop(true)
    } else {
      setTop(false)
    }
  }, [scrollTop])

  return (
    <>
      <div
        className={top ? 'scroll-button active' : 'scroll-button'}
        onClick={() => onClick()}
      >
        <div className='arrow'>
          <ArrowUpward sx={{ fontSize: 20 }} />
        </div>
      </div>
    </>
  )
}

export default ScrollToTop
