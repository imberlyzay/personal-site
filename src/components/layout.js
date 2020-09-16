import React from 'react';

import Header from './header';
import Footer from './footer';
import Banner from './banner'
import layoutStyle from './layout.module.scss'

export default ({children}) => (
  <div className={layoutStyle.container}>
    <div className={layoutStyle.content}>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)
