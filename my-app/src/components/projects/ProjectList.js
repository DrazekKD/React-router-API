import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
	return(
		<div className='projects-list sections'>
			<ProjectSummary/>
			<ProjectSummary/>
			<ProjectSummary/>
			<ProjectSummary/>
		</div>
	);
};

export default ProjectList;