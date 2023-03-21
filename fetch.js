// 1. JSON
const student = {
	name: "touhid",
	age: 24,
	id: 24,
	numbers: [23, 24, 56, 78],
};
const json = JSON.stringify(student);
const normal = JSON.parse(json);

// 2. fetch
fetch(url)
	.then((res) => res.json())
	.then((data) => console.log(data));

const loadData = async () => {
	const res = await fetch("url");
	const data = await res.json();
	console.log(data);
};

// 3. Keys, Values
const keys = Object.keys(student);
const values = Object.values(student);

// 4. for in and for of
for (const iterator of object) {
	// array of object
}
for (const key in object) {
	if (Object.hasOwnProperty.call(object, key)) {
		const element = object[key];
		// object
	}
}
