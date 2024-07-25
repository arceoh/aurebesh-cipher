import React from 'react';
import caesarCipher from '../../helpers/ceasarCipher.js';
import stripNonAlphabet from '../../helpers/stripNonAlphabet.js';
import { AUREBESH } from '../Aurebesh/AurebeshAlphabet';

function InputMessage() {
	const [inputMessage, setInputMessage] = React.useState('');
	const [strippedInputMessage, setStrippedInputMessage] = React.useState('');
	const [shiftedMessage, setShiftedMessage] = React.useState('');

	const handleChange = (e) => {
		const input = e.target.value;
		const strippedInput = stripNonAlphabet(input);
		const shiftedInput = caesarCipher(strippedInput, 3); // Shift by 3 for example

		setStrippedInputMessage(strippedInput.toLowerCase());
		setInputMessage(input);
		setShiftedMessage(shiftedInput);
	};

	const renderedAurebesh = shiftedMessage.split('').map((char, index) => {
		const aurebeshChar = AUREBESH[char];
		if (!aurebeshChar) return <span key={`${index}-${char}`}>{char}</span>; // Handle non-alphabet characters
		const SvgComponent = aurebeshChar.icon;
		return (
			<span className="text-center " key={`${index}-${char}`} style={{ margin: '2px' }}>
				<SvgComponent className="w-6 h-6" />
			</span>
		);
	});

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
				{inputMessage.length >= 0 && strippedInputMessage}
				{inputMessage.length === 0 && (
					<span className="py-2">
						<span aria-hidden className="invisible">
							Test
						</span>
					</span>
				)}
			</div>
			<div>
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
			<div>
				<p className="my-4 text-lg font-bold text-neutral">Aurebesh Message</p>
				<div className="flex flex-wrap gap-2">{inputMessage.length >= 0 && renderedAurebesh}</div>
			</div>
		</div>
	);
}

export default InputMessage;
