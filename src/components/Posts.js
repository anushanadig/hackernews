import React from 'react';
import Loader from 'react-loader-spinner';
import Post from './Post';

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
			<div>
				Something went wrong :( Failed to fetch data from Hackernews API. Please
				check your internet connection.
			</div>
		);
	}

	if (noResults) {
		return (
			<div>
				No results found. Please try again with different keywords.
			</div>
		);
	}

	return (
		<div className="table">
			{response.filter(filterSearchResults(filterTerm)).map(item => {
				return (
					<div key={item.objectID} className="table-row">
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
		return item => !!item.title;
	}
}

export default Posts;
