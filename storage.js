const add = () => {
	const inputId = document.getElementById("storage-id");
	const inputValue = document.getElementById("storage-value");
	const id = inputId.value;
	const value = inputValue.value;
	// 1. local storage add item
	if (id && value) {
		localStorage.setItem("phone", value);
	}
	inputId.value = "";
	inputValue.value = "";

	// 2. local storage remove item
	const saved = localStorage.getItem("phone");
	const show = document.getElementById("show");
	show.innerHTML = `phone: ${saved}`;
};
