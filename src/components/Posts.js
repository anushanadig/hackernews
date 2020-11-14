import React from 'react';
import Loader from 'react-loader-spinner';
import Post from './Post';
import Error from './Error';

function Posts(props) {
	const { response, filterTerm, onDismiss, loading, noResults, hasError } = props;

	if (loading) {
		return (
			<div className="loader">
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
		<div className="posts">
			{response.filter(filterSearchResults(filterTerm)).map(item => {
				return (
					<div key={item.objectID} className="post-row">
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
