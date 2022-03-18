import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no projects to show </h3>
      </div>
    );
  }
  return (
    <section className='projectslist'>
      <div className='projectslist-center'>
        {projects.map((item) => {
          return <Project key={item.id} project={item} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
