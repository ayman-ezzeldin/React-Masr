const productDescriptionInput = document.getElementById("productDescriptionInput");
const productNameInput = document.getElementById("productNameInput");
const productCategoryInput = document.getElementById("productCategoryInput");
const productPriceInput = document.getElementById("productPriceInput");
const productDiscountInput = document.getElementById("productDiscountInput");
const productQuantityInput = document.getElementById("productQuantityInput");
const addProductBtn = document.getElementById("addProductBtn");
const updateProductBtn = document.getElementById("updateProductBtn");
const showData = document.getElementById("showData");
const searchInput = document.getElementById("searchInput");


window.addEventListener("DOMContentLoaded", displayData);

function localStorageData() {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }
  return products;
}

addProductBtn.addEventListener("click", ()=> {
  const productName = productNameInput.value;
  const productCategory = productCategoryInput.value;
  const productPrice = productPriceInput.value;
  const productDiscount = productDiscountInput.value;
  const productQuantity = productQuantityInput.value;
  const productDescription = productDescriptionInput.value;
  const products = localStorageData();
  products.push({ productName, productCategory, productPrice, productDiscount, productQuantity, productDescription });
  localStorage.setItem("products", JSON.stringify(products));
  displayData();
  clearValues();
});

function displayData() {
  const products = localStorageData();
  let tableData = "";
  products.forEach((product, index) => {
    tableData += `<tr>
    <td>${product.productName}</td>
    <td>${product.productCategory}</td>
    <td>${product.productPrice}</td>
    <td>${product.productDiscount}</td>
    <td>${product.productQuantity}</td>
    <td>${product.productDescription}</td>
    <td><button onclick="updateProduct(${index})" class="btn btn-outline-info">Update</button></td>
    <td><button onclick="deleteProduct(${index})" class="btn btn-outline-danger">Delete</button></td>
  </tr>`;
  });
  showData.innerHTML = tableData;
}

function deleteProduct(index) {
  const products = localStorageData();
      products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayData();
}

function updateProduct(index) {
  const products = localStorageData();
  productNameInput.value = products[index].productName;
  productCategoryInput.value = products[index].productCategory;
  productPriceInput.value = products[index].productPrice;
  productDiscountInput.value = products[index].productDiscount;
  productQuantityInput.value = products[index].productQuantity;
  productDescriptionInput.value = products[index].productDescription;
  deleteProduct(index);
}


function clearValues() {
    productNameInput.value = "";
    productCategoryInput.value = "";
    productPriceInput.value = "";
    productDiscountInput.value = "";
    productQuantityInput.value = "";
    productDescriptionInput.value = "";
  }


