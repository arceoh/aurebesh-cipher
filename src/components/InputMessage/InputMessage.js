import React from 'react';

function InputMessage() {
	const [inputMessage, setInputMessage] = React.useState('');

	return (
		<div className="w-full">
			<h2>Your Message to Encode</h2>
			<textarea placeholder="message" className="w-full textarea textarea-bordered textarea-lg" />
		</div>
	);
}

export default InputMessage;
