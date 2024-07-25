const stripNonAlphabet = (str) => {
	return str.replace(/[^a-z]/gi, '');
};

export default stripNonAlphabet;
