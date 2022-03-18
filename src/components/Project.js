import React from 'react';
import defaultImg from '../img/edina.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Project({ project }) {
  const { name, slug, image, category } = project;

  return (
    <article className='project'>
      <div className='img-container'>
        <img src={image || defaultImg} alt='single project' />
        <div className="project-top">
          <h6>{category}</h6>
        </div>
        <Link to={`/projects/${slug}`} className='btn-featured project-link'>
          more information
        </Link>
      </div>
      <p className='project-info'>{name}</p>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
