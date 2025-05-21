import PropTypes, { number } from 'prop-types';
import { Project } from './Project';
import { useState } from 'react';

function ProjectForm({onCancel, onSave, project: initialProject }) {

  // important
  const [project, setProject] = useState(initialProject);

  const handleSubmit = (event) =>{
    event.preventDefault();
    onSave(project);
  };

  const handleChange = (event) => {
    const {type, name, value, checked} = event.target;
    let updatedValue =  type === 'checkbox' ?  checked : value ;

    // some validations
    if (type === number){
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let upatedProject;


    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });


  };



  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" value={project.name}  onChange={handleChange}/>
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description please"  value={project.description}  onChange={handleChange} />
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget"  value={project.budget}  onChange={handleChange}/>
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive"  value={project.isActive}  onChange={handleChange}/>
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium"  onClick={onCancel}>
        cancel
        </button>
      </div>
    </form>
  );
}

ProjectForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Project)
}
export default ProjectForm;