import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavbarTop = () => {
	return(
		<nav>
			<div className="nav-wrapper grey darken-3">
				<div className="brand-logo right"><Link to="/">Logo</Link></div>
				<SignedInLinks/>
				<SignedOutLinks/>
			</div>
		</nav>
	)
};

export default NavbarTop;