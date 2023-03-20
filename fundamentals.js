// 1. How to declare variable using let const
let myName = "touhid";
myName = "rinkue";
// 2. conditions
//   a. 6 basic condition: <, >, ===, !==, >=, <=
//   b. multiple condition: &&, ||
if (myName === "touhid" || myName === "rinlue") {
} else if (myName === "touhid" && myName === "rinlue") {
} else {
}
// 3. Array (declare, index, length, push, pop)
const number = [34, 56, 56, 34, 23];
// 4. Loop
for (let i = 0; i < number.length; i++) {
	const element = number[i];
}
// 5. Function
function add(a, b) {
	return a + b;
}
const addNum = add(3, 6);
// 6. Object (access 3 ways)
const student = {
	name: "touhid",
	age: 24,
	id: 24,
	numbers: [23, 24, 56, 78],
};

student.name;
student["name"];
const variable = "name";
student[variable];
