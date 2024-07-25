const stripNonAlphabet = (str) => {
	// return str.replace(/[^a-z]/gi, '');
	return str.replace(/[^a-z\s]/gi, '');
};

export default stripNonAlphabet;
