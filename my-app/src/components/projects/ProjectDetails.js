import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return(
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title {id}</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis dolore, ex exercitationem magni nulla praesentium qui. Consequatur culpa cumque, debitis dolore, eaque earum esse ex hic laboriosam laudantium, mollitia non omnis pariatur perferendis quam qui similique sit velit vero!</p>
				</div>
				<div className="card-action gret lighten-4 grey-text">
					<div>Post by the Drazek</div>
					<div>2nd, September, 2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;