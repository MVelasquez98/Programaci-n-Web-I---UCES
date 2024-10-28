// DOM
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

// Dod Agrega un producto a la lista en base al contenido de los input
function addProduct() {
  const productName = productNameInput.value.trim();
  const productPrice = parseFloat(productPriceInput.value);

  if (productName == "" || isNaN(productPrice) || productPrice <= 0) {
    alert("Por favor ingresa un nombre y precio correcto");
  }

  const productItem = document.createElement("li");
  productItem.classList.add("product-item");

  const productDetails = document.createElement("span");
  productDetails.textContent = `${productName} - ${productPrice.toFixed(2)}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Eliminar";

  removeBtn.addEventListener("click", () => {
    productList.removeChild(productItem);
  });

  productItem.appendChild(productDetails);
  productItem.appendChild(removeBtn);

  productList.appendChild(productItem);

  productNameInput.value = "";
  productPriceInput.value = "";
}

addProductBtn.addEventListener("click", addProduct);
productPriceInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addProduct();
  }
});
