// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  let realPrice = price.innerHTML
  let realQuantity = quantity.value
  let subtotal = realPrice * realQuantity 
  /* console.log(subtotal)  */
  const subtotalDom = product.querySelector(".subtotal span")
  subtotalDom.innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
    /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */ 
  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = 0
  const products = document.querySelectorAll(".product")
  products.forEach((eachProduct) => {
    totalPrice += updateSubtotal(eachProduct)
  })
  
  // ITERATION 3
  //... your code goes here
  const finalPrice = document.querySelector("#total-value span")
  finalPrice.innerText = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target)
  console.log('The target in remove is:', target);
  //... your code goes here
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProductName = document.querySelector(".create-product input[type='text']")
  let newProductPrice = document.querySelector(".create-product input[type='number']")
  let name = newProductName.value
  let price = newProductPrice.value
  console.log(name, price)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteButtons = document.querySelectorAll(".btn-remove")
  deleteButtons.forEach((eachBtn) => {
    eachBtn.addEventListener("click", removeProduct)
  })
  const addBtn = document.querySelector("#create")
  addBtn.addEventListener("click", createProduct)

});
