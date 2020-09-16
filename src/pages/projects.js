import React from 'react';

import Layout from '../components/layout'
import SingleProject from '../components/SingleProject'

import cindrImg from '../images/cindrcavees.png'

const cindr = {
  name: 'Cindr',
  description: `While other apps gamify dating, Cindr gamifies dating apps. Let's face it: dating apps are addictive, but ultimately
  dull. If you're going to spend an inordinate amount of time on an app, at least choose one that's built for it. Cindr take the dating
  app experience on step further by providing users with that comfort. As users choose their own adventures and navigate through
  a vibrant virtual world tailored to them based on their own answers, they meet other users who have answered similarly to them. When userws
  navigate to the same area within that world, they're able to request to matches with other users. This way, userss only contact other users
  whose fantasy landscapes match!
  `,
  image: cindrImg,
  url: 'https://cindr.herokuapp.com/',
  tech: 'Postgres | Sequelize | Express | Heroku | Redux | React'
}
const chia = {
  name: 'Chia',
  description: 'And here I am going to talk and talk and talk and talk about Chia',
  image: '',
  url: ''
}
const wanderers = {
  name: 'The Wanderers',
  description: "dummy dummy dummy",
  image: '',
  url: ''
}

const Projects = () => {
  return  (
    <Layout>
      <SingleProject data={cindr} />
      <SingleProject data={wanderers} />
      <SingleProject data={chia} />
    </Layout>
  )
}

export default Projects;
