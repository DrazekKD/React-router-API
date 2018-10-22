import * as React from 'react';
import './Blog.scss'

import Post from '../../components/Post/Post'

class Blog extends React.Component{
	public render() {
		return (
			<div>
				<section className="Posts">
					<Post/>
					<Post/>
					<Post/>
				</section>
				<section></section>
				<section></section>
			</div>
		)
	}
}

export default Blog;