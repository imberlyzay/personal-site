import React from 'react';

import Github from '../images/github-logo.svg'
import LinkedIn from '../images/linkedin-logo.svg'
import footerStyle from './footer.module.scss'

const Footer = () => {
  const gitHub = 'https://github.com/imberlyzay'
  const linkedIn = 'https://www.linkedin.com/in/kimberly-zawacki/'

  return (
    <footer>
      <p>Created by Kimberly Zawacki, © 2020</p>
      <div className={footerStyle.icons}>
        <a href={gitHub}><img src={Github} /></a>
        <a href={linkedIn}><img src={LinkedIn} /></a>
      </div>
    </footer>
  )
}

export default Footer;
