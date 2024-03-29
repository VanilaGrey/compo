/* eslint-disable no-magic-numbers */
const getWordAfterNum = (num, [form1, form2 = form1, form3 = form2]) => {
	const remainder10 = num % 10;
	const remainder100 = num % 100;

	if (remainder10 === 1 && remainder100 !== 11) {
		return form1;
	}

	const notInSecondDozen = remainder100 < 10 || remainder100 >= 20;
	if (remainder10 >= 2 && remainder10 <= 4 && notInSecondDozen) {
		return form2;
	}

	return form3;
};

export { getWordAfterNum };
