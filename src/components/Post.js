/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import Button from './Button';

function Post({item, onDismiss}) {

	const subLink = css`
		text-decoration: none;
		font-size: smaller;
		margin: 0 0.5rem;

		&:hover {
			text-decoration: underline;
			color: #222;
		  }

		  
	`
	const originalLink = css`
		  ${subLink};
		  @media screen and (max-width: 768px) {
			  display: none;
			}
		}
	`

	return (
		<div>
			<div>
				<a title={`Visit ${item.url}`} href={item.url}>
					{item.title}
				</a>
				<span>
					<Button
						onClick={() => onDismiss(item.objectID)}
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
						css={subLink}
					>
						{item.author}
					</a>
				</span>|
				<span>
					<a
						title="See original post on HN"
						href={`https://news.ycombinator.com/item?id=${item.objectID}`}
						css={subLink}
					>
						{item.num_comments} comments
					</a>
				</span>|
				<span>
					<a
						title="See original post on HN"
						href={`https://news.ycombinator.com/item?id=${item.objectID}`}
						css={subLink}
					>
						{item.points} points
					</a>
				</span>
				<span>
					<a
						title="Visit the original site"
						href={item.url}
						css={originalLink}
					>
						| ({item.url})
					</a>
				</span>
			</div>
		</div>
	);
}

export default Post;
