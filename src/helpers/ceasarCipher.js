const caesarCipher = (str, shiftByNum) => {
	const num = shiftByNum % 26; // Ensure the shift is within the range of 0-25
	const lowerCaseStr = str.toLowerCase();
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';

	for (let i = 0; i < lowerCaseStr.length; i++) {
		const currentChar = lowerCaseStr[i];
		if (alphabet.indexOf(currentChar) === -1) {
			result += currentChar; // Append non-alphabet characters as is
			continue;
		}

		const currentIndex = alphabet.indexOf(currentChar); // get index of current char as foun in alphabet
		let newIndex = currentIndex + num; // add to index the shiftByNum to get index for new char

		// if newindex out of rang, 0-25, loop back to start or end as needed
		if (newIndex > 25) newIndex -= 26;
		if (newIndex < 0) newIndex += 26;
		// add new char from alphabet at index newIndex
		result += alphabet[newIndex];
	}

	return result;
};

export default caesarCipher;
