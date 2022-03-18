import React, { Component } from 'react';

import { withRouter } from '../context';
import { ProjectContext } from '../context';
import { Link } from 'react-router-dom';
import Languages from '../components/Languages';
import Footer from '../components/Footer';

class SingleProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.params.slug,
    };
  }
  static contextType = ProjectContext;
  render() {
    const { getProject } = this.context;
    const project = getProject(this.state.slug);

    if (!project) {
      return (
        <div className='error'>
          <h3>no such project could be found...</h3>
          <Link to='/projects' className='btn-secondary'>
            back to projects
          </Link>
        </div>
      );
    }

    const { name, description, languages, site, code, image } = project;

    return (
      <>
        <section className='single-project'>
          <div className='single-project-container'>
            <article className='photo'>
              <img src={image} alt={name} />
            </article>

            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
              <div className='btn-container'>
                <a href={site} className='btn-secondary btn-filter'>
                  view site
                </a>
                <a href={code} className='btn-secondary btn-filter'>
                  code
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className='project-languages'>
          <Languages languages={languages} />
        </section>
        
        <div className='btn-container'>
          <Link to='/projects' className='btn-secondary btn-page'>
            back to projects
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}
export default withRouter(SingleProject);
