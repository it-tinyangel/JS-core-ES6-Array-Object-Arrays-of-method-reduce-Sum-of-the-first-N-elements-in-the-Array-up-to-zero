let arr1 = [1, 2, 5, 0, 4, 5, 6];

const partialSum = arr1.reduce((acc, curr) => {
	if (curr === 0) {
		return acc;
	}
	return acc + curr;
}, 0);

console.log('The sum of the first N elements up to the first zero:', partialSum);
