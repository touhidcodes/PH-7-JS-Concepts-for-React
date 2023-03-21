const product = [
	{
		name: "laptop",
		price: 3400,
		brand: "lenovo",
		color: "silver",
	},
	{
		name: "watch",
		price: 400,
		brand: "apple",
		color: "black",
	},
	{
		name: "camera",
		price: 3000,
		brand: "canon",
		color: "black",
	},
	{
		name: "phone",
		price: 5000,
		brand: "oppo",
		color: "golden",
	},
];
// 1. map
const brands = product.map((product) => product.brand);
console.log(brands);

// 2. forEach
product.forEach((product) => console.log(product.price));

// 3. filter
const cheap = product.filter((products) => products.price <= 5000);
console.log(cheap);
const nameFilter = product.filter((products) => products.name.includes("n"));
console.log(nameFilter);

// 4. find
const nameFind = product.filter((products) => products.name.includes("n"));
console.log(nameFind);