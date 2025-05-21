import { useState } from 'react';
import { Project } from './Project';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function ProjectList({ projects, onSave }) {
  
  const [projectBeingEdited, setProjectBeingEdited] =useState();
  const handleEdit = (project) => {
    setProjectBeingEdited(project)  
    //console.log(project);
   };

   const cancelEditing = () =>{
    setProjectBeingEdited(null) // like handledEdit but with null due cancelling
   }


  const items = projects.map(project => (
     <div key={project.id} className="cols-sm">
       {project === projectBeingEdited ? (<ProjectForm project={project} onSave={onSave} onCancel={cancelEditing}/>): (<ProjectCard project={project} onEdit={handleEdit}/>)}
      </div>
    ));
    return <div className="row">{items}</div>;
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
  onSave: PropTypes.func.isRequired
 };

export default ProjectList;