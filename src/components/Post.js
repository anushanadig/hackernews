import React from 'react';
import Button from './Button';

function Post({item, onDismiss}) {

	return (
		<div>
			<div>
				<a title={`Visit ${item.url}`} href={item.url}>
					{item.title}
				</a>
				<span className="dismiss-btn">
					<Button
						onClick={() => onDismiss(item.objectID)}
						classList="dismiss-btn"
					>
						X
					</Button>
				</span>
			</div>
			<div>
				<span>
					<a
						title={`See ${item.author} profile on HN`}
						href={`https://news.ycombinator.com/user?id=${item.author}`}
						className="sub-link"
					>
						{item.author}
					</a>
				</span>|
				<span>
					<a
						title="See original post on HN"
						href={`https://news.ycombinator.com/item?id=${item.objectID}`}
						className="sub-link"
					>
						{item.num_comments} comments
					</a>
				</span>|
				<span>
					<a
						title="See original post on HN"
						href={`https://news.ycombinator.com/item?id=${item.objectID}`}
						className="sub-link"
					>
						{item.points} points
					</a>
				</span>
				<span>
					<a
						title="Visit the original site"
						href={item.url}
						className="sub-link original-link"
					>
						| ({item.url})
					</a>
				</span>
			</div>
		</div>
	);
}

export default Post;
