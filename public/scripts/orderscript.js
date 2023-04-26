const menuArray = [
    {
        name: "Vanilla",
        // ingredients: ["Scoop", "Dish", "1/2 Pint, Pint"],
        id: 0,
        price: 1.10,
        emoji: "🍦"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
        
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 7,
        emoji: "🍺",
        id: 2
    },
      {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 7,
        emoji: "🍺",
        id: 2
    }
]

let orderedItems = [];

function getMenuHtml() {
  let menuHtml = "";
  menuArray.forEach((menu) => {
    menuHtml += `
      <div class="menu-items" id="menu-items">
        <span>${menu.emoji}</span>
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
  document.getElementById("thankyou-screen").innerHTML = `<p>Thanks, ${payerName}! Your order is on its way! Please refresh your homepage to go back to the ordering screen</p>  
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
