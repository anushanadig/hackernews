/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React from 'react';

function Button({ children, onClick, style, classList }) {

const Button = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	background-color: white;
	&:hover{
		color: white;
  		background-color: black;
	}
	@media screen and (max-width: 768px) {
        top: 1.8rem;
      }
`

	return (
		<Button onClick={onClick} type="button">
			{children}
		</Button>
	);
}

export default Button;
