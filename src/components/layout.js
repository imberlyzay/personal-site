import React from 'react';

import Header from './header';
import Footer from './footer';

export default ({children}) => (
  <div style={{ margin: `3rem auto`, maxWidth: 900 }}>
    <Header />
    <div style={{ marginTop: `4rem`}}>{children}</div>
    <Footer />
  </div>
)
