/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';
import Loader from 'react-loader-spinner';
import Post from './Post';
import Error from './Error';

function Posts(props) {
	const { response, filterTerm, onDismiss, loading, noResults, hasError } = props;

	const postRow = css`
	padding: 2rem;
	border: none;
	position: relative;`

	if (loading) {
		return (
			<div css={{
				textAlign: 'center'
			  }}>
				<Loader type="Rings" color="#d3d3d3" height={500} width={500} />
			</div>
		);
	}

	if (hasError) {
		return (
			<Error>
				Something went wrong :( Failed to fetch data from Hackernews API. Please
				check your internet connection.
			</Error>
		);
	}

	if (noResults) {
		return (
			<Error>
				No results found. Please try again with different keywords.
			</Error>
		);
	}

	return (
		<div css={{margin: '3rem 0'}}>
			{response.filter(filterSearchResults(filterTerm)).map(item => {
				return (
					<div key={item.objectID} css={postRow}>
						<Post item={item} onDismiss={onDismiss} />
					</div>
				);
			})}
            
		</div>
	);
}

function filterSearchResults(filterTerm) {
	if (filterTerm) {
		return item =>
			item?.title?.toLowerCase().includes(filterTerm.toLowerCase());
	} else {
		return item => !!item.title && !!item.url;
	}
}

export default Posts;
