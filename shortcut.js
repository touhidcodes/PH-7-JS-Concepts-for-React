// Truthy: "almas", 5, true, {}, []
// Falsy: "", 0, false, null, undefined

// 2. Ternary Operator
// condition ? if value : else value

// 3. number to string
const num = 4;
const numStr = 4 + "";
console.log(numStr);

// 4. String to number
const string = "45";
const strNum = +string;
console.log(strNum);

// 5. Call function using ternary operator
let isActive = true;
function showUser() {
	console.log("show Display");
}
function hideUser() {
	console.log("hide Display");
}
isActive ? showUser() : hideUser();
isActive && showUser(); // true
isActive || hideUser(); // false

// 6. Toggle boolean
isActive == !isActive;
