import React from 'react';
import ProjectList from './ProjectList';
import { withProjectConsumer } from '../context';
import Loading from './Loading';
import Categories from './Categories';

function ProjectContainer({ context }) {
  const { loading, sortedProjects, categories, handleFilter } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Categories categories={categories} handleFilter={handleFilter} />
      <ProjectList projects={sortedProjects} />
    </>
  );
}

export default withProjectConsumer(ProjectContainer);
