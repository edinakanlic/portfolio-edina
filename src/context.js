import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Client from './Contentful';

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = {
    projects: [],
    sortedProjects: [],
    featuredProjects: [],
    loading: true,
    categories: [],
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'portofolio',
        order: 'fields.order',
      });
      // console.log(response.items);
      let projects = this.formatData(response.items);
      // console.log(projects);
      let featuredProjects = projects.filter(
        (project) => project.featured === true
      );
      let categories = projects.map((project) => project.category);
      categories = ['all', ...new Set(categories)];

      this.setState({
        projects,
        featuredProjects,
        sortedProjects: projects,
        loading: false,
        categories,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;
      let project = { ...item.fields, image, id };

      return project;
    });
    //  console.log(tempItems);
    return tempItems;
  }

  getProject = (slug) => {
    let tempProjects = [...this.state.projects];
    const project = tempProjects.find((project) => project.slug === slug);
    return project;
  };

  handleFilter = (category) => {
    this.setState(this.filterProjects(category));
  };

  filterProjects = (category) => {
    let { projects } = this.state;
    // all projects
    let tempProjects = [...projects];

    // filter by category
    if (category !== 'all') {
      tempProjects = tempProjects.filter(
        (project) => project.category === category
      );
    }

    // change state
    this.setState({
      sortedProjects: tempProjects,
    });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          handleFilter: this.handleFilter,
          getProject: this.getProject,
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export function withProjectConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProjectConsumer>
        {(value) => <Component {...props} context={value} />}
      </ProjectConsumer>
    );
  };
}

export function withRouter(WrappedComponent) {
  return function RouterWrapper(props) {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
  };
}

export { ProjectContext, ProjectProvider, ProjectConsumer };
