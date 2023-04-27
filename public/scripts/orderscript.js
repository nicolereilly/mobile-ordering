const menuArray = [
	{
		name: "Vanilla",
		// ingredients: ["Scoop", "Dish", "1/2 Pint, Pint"],
		id: 0,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Chip Chocolate",
		id: 1,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Peachy Peach",
		id: 2,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,
	},
	{
		name: "Chocolate Caramel Cherry",
		id: 3,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,
	},
	{
		name: "Rainbow Sherbert",
		id: 4,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,
	},
	{
		name: "Cookie Dough",
		id: 5,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Orange Pineapple",
		id: 6,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "O'Charley's Caramel Pie",
		id: 7,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Chocolate",
		id: 8,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Strawberry",
		id: 9,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Black Walnut",
		id: 10,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Cookies & Cream",
		id: 11,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Butter Pecan",
		id: 12,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Cherry Vanilla",
		id: 13,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Red Velvet Cake",
		id: 14,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Chocolate Marshmallow Almond",
		id: 15,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Sugarfree Vanilla ",
		id: 16,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Sugarfree Butter Pecan",
		id: 17,
		price: 1.10,
		price1: 2.20,
		price2: 2.20,
		price3: 4.40,

	},
	{
		name: "Ham Sandwich",
		id: 18,
		price: 3.85,

	},
	{
		name: "Ham Salad",
		id: 19,
		price: 2.70,

	},
	{
		name: "Chicken Salad Sandwich",
		id: 20,
		price: 2.70,

	},
	{
		name: "Pimento Cheese Sandwich",
		id: 21,
		price: 2.70,

	},
	{
		name: "Egg & Olive",
		id: 22,
		price: 2.70,

	},
	{
		name: "Tuna Sandwich",
		id: 23,
		price: 2.70,

	},
	{
		name: "Tomato & Lettuce Sandwich",
		id: 24,
		price: 1.65,

	},
	{
		name: "Hot Dog",
		id: 25,
		price: 1.10,

	},
	{
		name: "Grilled Cheese",
		id: 26,
		price: 1.50,

	},
	{
		name: "Banana Sandwich",
		id: 27,
		price: 1.65,

	},
	{
		name: "Turkey Sandwich",
		id: 28,
		price: 3.85,

	},
	{
		name: "Biscuit/Jelly",
		id: 29,
		price: 0.75,

	},
	{
		name: "Ham & Biscuit",
		id: 30,
		price: 1.30,

	},
	{
		name: "Hot Chocolate",
		id: 31,
		price: 1.10,

	},
	{
		name: "Milk",
		id: 32,
		price: 1.00,

	},
	{
		name: "Coffee",
		id: 33,
		price: 0.95,

	},
	{
		name: "Soft Drinks",
		id: 34,
		price: 1.15,

	},
	{
		name: "Tea",
		id: 35,
		price: 0.95,

	},
	{
		name: "Lemonade",
		id: 36,
		price: 0.95,

	},
	{
		name: "Malts",
		id: 37,
		price: 2.70,

	},
	{
		name: "Shakes",
		id: 38,
		price: 2.60,

	},
	{
		name: "Large Chocolate Milk",
		id: 39,
		price: 1.30,

	},
	{
		name: "Small Chocolate Milk",
		id: 40,
		price: 1.10,

	},
	{
		name: "Banana Split Sundae",
		id: 41,
		price: 3.90,

	},
	{
		name: "Fruit Split Sundae",
		id: 42,
		price: 3.70,

	},
	{
		name: "Hot Fudge Sundae",
		id: 43,
		price: 2.80,

	},
	{
		name: "Hot Butterscotch Sundae",
		id: 44,
		price: 2.80,

	},
	{
		name: "Hot Caramel Sundae",
		id: 45,
		price: 2.80,

	},
	{
		name: "Fruit Sundae",
		id: 46,
		price: 3.05,

	},
	{
		name: "Cherry Sundae",
		id: 47,
		price: 2.75,

	},
	{
		name: "Pineapple Sundae",
		id: 48,
		price: 2.75,

	},
	{
		name: "Chocolate Sundae",
		id: 49,
		price: 2.75,

	},
	{
		name: "Strawberry Sundae",
		id: 50,
		price: 2.75,

	},
	{
		name: "Cherry Soda",
		id: 51,
		price: 1.10,

	},
	{
		name: "Strawberry Soda",
		id: 52,
		price: 1.10,

	},
	{
		name: "Chocolate Soda",
		id: 53,
		price: 1.10,

	}
]

let orderedItems = [];

function getMenuHtml() {
	let menuHtml = "";
	menuArray.forEach((menu) => {
		menuHtml += `
      <div class="menu-items" id="menu-items">
        <div class="details">
        <h3>${menu.name} - <strong>$${menu.price}</strong></div></h3>
      <button class="add-btn" data-item="${menu.id}">Scoop</button>
      <button class="add-btn" data-item="${menu.id}">Dish</button>
      <button class="add-btn" data-item="${menu.id}">1/2 Pint</button>
      <button class="add-btn" data-item="${menu.id}">Pint</button>
      </div>
      `;
	});
	return menuHtml;
}

document.addEventListener("click", (e) => {
	document.getElementById("order-total").classList.remove("hidden");
	if (e.target.dataset.item) {
		addItems(e.target.dataset.item);
	} else if (e.target.dataset.indexNumber) {
		removeItems(e.target.dataset.indexNumber);
	} else if (e.target.id === "complete-order-btn") {
		completeOrder();
	} else if (e.target.id === "modal-close-btn") {
		closeModal();
	} else if (e.target.id === "pay-btn") {
		renderThankScreen(e);
		closeModal()
	}
	console.log(e.target.dataset.indexNumber)
});


function addItems(itemId) {
	document.getElementById("order-total").style.display = "flex";


	// classList.remove("hidden");

	const targetItem = menuArray.filter((item) => {
		return item.id == itemId;
	})[0];
	orderedItems.push(targetItem);
	renderOrderedItems();
	renderTotal();
}

function removeItems(index) {
	orderedItems.splice(index, 1)
	renderOrderedItems();
	renderTotal();
}

function renderThankScreen(e) {
	e.preventDefault()

	const el = document.getElementById('order-total')
	el.remove()

	const payerName = document.getElementById("name").value
	const payerEmail = document.getElementById("email").value

	document.getElementById("thankyou-screen").innerHTML = `<h1>Thanks, ${payerName}! Your order is on its way! Check your email at ${payerEmail} to check on its status! Please refresh your homepage to go back to the ordering screen </h1>
  `
}

function renderOrderedItems() {
	const html = orderedItems.map((item, index) => {
		return `
    <div id="order-items" class="order-items">
     <div class="item-row">
    <h4>${item.name}</h4>
    <button data-remove="remove" data-index-number="${index}" class="remove-btn">Remove</button>
     </div>
    <p data-price="price">$${item.price}</p>
    </div>`;
	});
	document.getElementById("total").innerHTML = html.join("");
}

function renderTotal() {
	const itemPrices = orderedItems.map((item) => item.price);
	const totalPrice = itemPrices.reduce((a, b) => a + b, 0);
	document.getElementById(
		"total-price"
	).innerHTML = `Total Price: <span>$${totalPrice}</span>`;
}

function renderMenu() {
	document.getElementById("menu").innerHTML = getMenuHtml();
}

renderMenu();

// Modal Function
const modal = document.getElementById("modal")
const overlay = document.querySelector(".overlay")

function closeModal() {
	modal.style.display = "none"
	modal.classList.remove("visible")
	modal.classList.add("hidden")
	overlay.style.display = "none"
}

function completeOrder() {
	modal.style.display = "block"
	modal.classList.remove("hidden")
	modal.classList.add("visible")
	overlay.style.display = "block"
}





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}