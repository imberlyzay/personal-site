import React from 'react';

import Button from './button'
import projectStyling from './SingleProject.module.scss'

const SingleProject = (data) => {
 const destructuredData = data.data

  return (
    <div className={projectStyling.container}>
      <div className={projectStyling.containerTop}>
        <h3>{destructuredData.name}</h3>
        <a><Button target={'on Github'} /></a>
        <a href={destructuredData.url}><Button target={'in the Wild'} /></a>
      </div>
      <img src={destructuredData.image} />
      <p>{destructuredData.description}</p>
      <p>{destructuredData.tech}</p>
    </div>
  )
}


export default SingleProject;
