import React from 'react';
import caesarCipher from '../../helpers/ceasarCipher.js';
import stripNonAlphabet from '../../helpers/stripNonAlphabet.js';

function InputMessage() {
	const [inputMessage, setInputMessage] = React.useState('');
	const [shiftedMessage, setShiftedMessage] = React.useState('');

	const handleChange = (e) => {
		const input = e.target.value;
		const strippedInput = stripNonAlphabet(input);
		const shiftedInput = caesarCipher(strippedInput, 3); // Shift by 3 for example
		setInputMessage(input);
		setShiftedMessage(shiftedInput);
	};

	return (
		<div className="w-full">
			<h2>Your Message to Encode</h2>
			<textarea
				value={inputMessage}
				onChange={handleChange}
				placeholder="message"
				className="w-full textarea textarea-bordered textarea-lg"
			/>
			<div>
				<p className="my-4 text-lg font-bold text-neutral">Lowercase message</p>
				{inputMessage.length >= 0 && inputMessage.toLowerCase()}
				{inputMessage.length === 0 && (
					<span className="py-2">
						<span aria-hidden className="invisible">
							Test
						</span>
					</span>
				)}
			</div>
			<p className="my-4 text-lg font-bold text-neutral">Ciphered Message</p>
			{inputMessage.length >= 0 && shiftedMessage}
			{inputMessage.length === 0 && (
				<span className="py-2">
					<span aria-hidden className="invisible">
						Test
					</span>
				</span>
			)}
		</div>
	);
}

export default InputMessage;
