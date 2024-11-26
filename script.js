const cartItems = [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalContainer = document.getElementById("cart-total");

function updateCart() {
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>السلة فارغة.</p>";
    cartTotalContainer.innerHTML = "<p>المجموع: 0 ريال</p>";
  } else {
    cartItemsContainer.innerHTML = cartItems
      .map(
        (item) => `
            <p>${item.name} - ${item.price} ريال</p>
        `
      )
      .join("");
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotalContainer.innerHTML = `<p>المجموع: ${total} ريال</p>`;
  }
}

document.querySelectorAll(".product button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const productElement = e.target.closest(".product");
    const name = productElement.dataset.name;
    const price = parseInt(productElement.dataset.price);
    cartItems.push({ name, price });
    alert(`${name} تمت إضافته إلى السلة!`);
    updateCart();
  });
});
