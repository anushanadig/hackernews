/** @jsxImportSource @emotion/react */

import React from 'react';

function Error({children}) {
	return <div css={{
		color: 'red',
		margin: '12rem',
  		marginTop: '25%'
	}}>
		{children}</div>;
}

export default Error;
