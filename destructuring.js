// 1. Array
const [x, y] = [2, 4];
console.log(x);
console.log(y);

const student = {
	name: "touhid",
	age: 24,
	id: 24,
	numbers: [23, 24, 56, 78],
};

const [first, second] = student.numbers;

// 2. Object
const { name, age } = {
	name: "touhid",
	age: 24,
	id: 24,
	numbers: [23, 24, 56, 78],
};

const { id } = student;
console.log(id);
