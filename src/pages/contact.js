import React from 'react';
import Layout from '../components/layout'

import contactStyling from './contact.module.scss'


export const Contact = () => {

  return (
    <Layout>
      <div className={contactStyling.container}>
        Misery loves company! Email me at
        <a href="mailto:ximberlyzawacki@gmail.com"> ximberlyzawacki@gmail.com </a>
        {/* <img src={Scarlett} /> */}
      </div>
    </Layout>
  )
}

export default Contact;
