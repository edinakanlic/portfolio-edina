import React, { Component } from 'react';
import Title from '../components/Title';
import ProjectContainer from '../components/ProjectContainer';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <div className='projects-container'>
        <Title title='my projects' />
        <ProjectContainer />
        <Link to='/' className='btn-secondary btn-page'>
          return home
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default Projects;
