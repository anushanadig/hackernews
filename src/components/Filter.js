/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

export default function Filter({filterTerm, onFilterTermChange}) {

	const filter = css`
		display: grid;
		grid-template-columns: 70% 30%;
		margin: 2rem 0;

		input {
			grid-column: 2;
			font-size: 1.6rem;
			padding: 0.8rem;
			border: 1px solid #000;
		  }

		  @media screen and (max-width: 768px) {
			display: grid;
			grid-template-columns: 100%;

			input {
				grid-column: 1;
				margin: 2rem;
			  }
		  }
	`

    return (
		<div css={filter}>
			<input
				type="text"
				value={filterTerm}
				onChange={onFilterTermChange}
				placeholder="Filter Results"
			/>
		</div>
	);
}