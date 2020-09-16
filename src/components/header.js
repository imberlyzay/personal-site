import React from 'react';
import { Link } from 'gatsby';

import headerStyle from './header.module.scss'

const ListLink = props => (
  <li className={headerStyle.link}>
    <Link to={props.to} className={headerStyle.link}>{props.children}</Link>
  </li>
)

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <ListLink to="/">
          <div className={headerStyle.title}>Kimberly Zawacki</div>
      </ListLink>
      <div className={headerStyle.navContainer}>
        <ListLink to='/about'>About</ListLink>
        <ListLink to='projects'>Projects</ListLink>
        <ListLink to ='/contact'>Contact</ListLink>
      </div>
    </header>
  )
}

export default Header;
