import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedLinks = () => {
	return(
	<ul className="left">
		<li><NavLink to='/create'>New Project</NavLink></li>
		<li><NavLink to='/'>Log Out</NavLink></li>
		<li><NavLink to='/' className='btn btn-floating pink lighten-1'>KD</NavLink></li>
	</ul>
	)
};

export default SignedLinks;