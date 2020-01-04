import React from 'react';
import { Link } from 'gatsby';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Kimberly Zawacki</h3>
      </Link>
      <ul>
        <div style={{ listStyle: `none`, float: `right`}}>
          <ListLink to='projects'>Projects</ListLink>
          <ListLink to='/about'>About</ListLink>
          <ListLink to ='/contact'>Contact</ListLink>
        </div>
      </ul>
    </header>
  )
}

export default Header;
