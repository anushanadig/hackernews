import React from 'react';

function Button({ children, onClick, style, classList }) {
	return (
		<button onClick={onClick} type="button" style={style} className={classList}>
			{children}
		</button>
	);
}

export default Button;
