import React, { Component } from 'react';
import { ProjectContext } from '../context';
import Project from './Project';
import Title from './Title';
import Loading from './Loading';
import { Link } from 'react-router-dom';

export default class FeaturedProjects extends Component {
  static contextType = ProjectContext;
  render() {
    let { loading, featuredProjects: projects, categories } = this.context;
    projects = projects.map((project) => {
      return <Project key={project.id} project={project} />;
    });

    return (
      <section id='featured' className='featured-projects'>
        <Title title='featured projects' />
        <div className='featured-projects-center'>
          {loading ? <Loading /> : projects}
        </div>
        <div className='featured-projects-info'>
          <h4>
            If you show interest to see my other projects click on the button
            below:
          </h4>
          <Link to='/projects' className='btn-secondary'>
            see more projects
          </Link>
        </div>
    
      </section>
    );
  }
}
