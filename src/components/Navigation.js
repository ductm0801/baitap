import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div >
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <div class="topnav">
              <a className='active' href='#home'>Home</a>
              <a href='#news'>News</a>
              <a href='#about'>About</a>
              <a href='#contact'>Contact</a>
              
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
         </div>
      </nav>
    </div>
  )
}
