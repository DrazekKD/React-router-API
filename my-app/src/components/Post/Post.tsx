import * as React from 'react';
import './Post.scss'
interface IProps {
	title?: string;
	author?: string;
}

const Post: React.SFC<IProps> = (props: IProps) => (
		<article className="Post">
			<h1>{props.title}</h1>
				<div className="Info">
					<div className="Author">{props.author}</div>
				</div>
		</article>
);

Post.defaultProps = {
	title: 'Siema',
	author: 'Kamil',
};

export default Post;