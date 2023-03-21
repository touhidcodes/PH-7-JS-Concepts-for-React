// 1. Template String
const student = {
	name: "touhid",
	age: 24,
	id: 24,
	numbers: [23, 24, 56, 78],
};
const about = `my name is ${student.name}`;
// 2. Arrow Function
const five = () => {
	return 2 + 5;
};
// 3. Spread Operator
const number = [34, 56, 56, 34, 23];
const newNumber = [...number, 55];
console.log(newNumber);
