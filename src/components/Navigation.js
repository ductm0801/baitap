
import React from 'react'
//import { useContext } from 'react'
//import { ThemeContext } from '../ThemeContext'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'

export default function Navigation() {


  // const { theme, toggle, dark } = useContext(ThemeContext)

  return (
    //   <div >
    //     <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    //       <div class="topnav">
    //         <a className='active' href='/'>Home</a>
    //         <a href='news'>News</a>
    //         <a href='about'>About</a>
    //         <a href='contact'>Contact</a>

    //         <div style={{ position: 'relative' }}>
    //           <a className='switch-mode' href='#' onClick={toggle}
    //             style={{
    //               backgroundColor: theme.backgroundColor,
    //               color: theme.color,
    //               outline: 'none'
    //             }} data-testid="toggle-theme-btn"
    //           >
    //             Switch Nav to {!dark ? 'Dark' : 'Light'} mode
    //           </a>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // )
    <Navbar className='menu'
      alignLinks="right"
      brand={<span className="brand-logo">Players Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li><Link to='/'><Icon left>home</Icon>Home</Link></li>
        <li to='/about'> <Link to='/about'><Icon left>info_outline</Icon>About</Link>
        </li>
        <li to='/news'> <Link to='/news'><Icon left>dvr</Icon>News</Link>
        </li>
        <li href='/contact'> <Link to='/contact'><Icon left>Contact</Icon>Contact</Link>
        </li>
      </ul>

    </Navbar>
  )
}

