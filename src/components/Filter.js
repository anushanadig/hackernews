import React from 'react';

export default function Filter({filterTerm, onFilterTermChange}) {
    return (
		<div className="filter-box">
			<input
				type="text"
				value={filterTerm}
				onChange={onFilterTermChange}
				placeholder="Filter Results"
			/>
		</div>
	);
}