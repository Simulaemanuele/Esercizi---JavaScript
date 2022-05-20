function sumUntil(maxValue) {
  let string = '0';

	let total = 0;
	for (let i = 1; i <= maxValue; i++) {
		total = i + total;
		string = string + ' + ' + i;
	}
	return string + ' = ' + total;
}

console.log(sumUntil(5));