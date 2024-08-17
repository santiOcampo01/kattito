document.addEventListener('DOMContentLoaded', function () { //Wait for the DOM to be loaded before executing the code
  const currentPage = document.body.id //Get the id of the current body to see wich page is being displayed
  header = document.querySelector('header')
  buttonBack = document.querySelector('.buttonBack')
  
  window.addEventListener('scroll', function () { //For scroll of header and appear button back
  if (window.scrollY > 10) {
    header.classList.add('action')
    buttonBack.classList.add('action')
  } else {
    header.classList.remove('action')
    buttonBack.classList.remove('action')
  }
})

let products = [] //Array to store the products

  fetch('./js/products.json') //Fetch the products from the json file
    .then(response => response.json())
    .then(data => {
      products = data
      if (currentPage === 'main') { //Check if the current page is the main page to load all the products
        loadProducts(products) 
      } else if (currentPage === 'productDescription') { //Check if the current page is the product description page to load just the product selected
              const id = new URLSearchParams(window.location.search).get('id') //Get the id of the product from the URL
        const productDescription = products.find(product => product.id == id) //Find the product with the id (its like a for loop)
        description(productDescription) //Call the function to load one product selected
      }
    })

function loadProducts(products) { //Function to load all the products
  containerProducts = document.querySelector('.grid-container')
  containerProducts.innerHTML = '' //Clean the container of the products
  products.forEach(element => { // Loop to load all the products
    const li = document.createElement('li') //Create a li element
    //Add the html to the li element
    li.innerHTML = ` 
      <div class="imgs-best-sellers">
                    <a href="productDescription.html?id=${element.id}">
                    <div class="img-container">
                    <img src="${element.imgs.front}" class="front alt${element.name}">
                    <img src="${element.imgs.back}" class="back alt${element.name}">
                    <button id="${element.id}" class="iconProducts">
                       <ion-icon name="bag-add-outline" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
                    </button>
                    </div>
                    <div class="calificacion-estrellas">
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <span class="span">(1)</span>
                    </div>
                    
                    <a>${element.name}</a>
                    <data>$${element.price}</data>
                    </a>
                  </div>
      `
    containerProducts.appendChild(li) //Add the li element to the container of the products
  })
}

    function description(products) { //Function to load the product selected
      descriptionProduct = document.querySelector('#containerProductDescription')
        window.addEventListener('scroll', function () { //this is for the header in the description product, because we need to change the position there
          header.style.position = this.window.scrollY > 10 ? 'fixed' : 'relative' //this is an if else but we are using a ternary operator
        })
          descriptionProduct.innerHTML = `
      <div class="product-description">
      <div class="containerProduct">
        <div class="img-containerDescription">
        <img src="${products.imgs.front}" class="frontProduct alt${products.name}">
        <img src="${products.imgs.back}" class="backProduct alt${products.name}">
        </div>
        <div class="calificacion-estrellas">
                                <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <ion-icon name="star" ></ion-icon>
                        <span class="span">(1)</span>
                    </div>
      <h4>${products.name}</h4>
      <p>${products.description}</p>
      <data>$${products.price}</data>
      <div class="containerButtons">
      <a href="index.html" class="backDescription">Volver</a>
      <button class="buttonAdd">Agregar al carrito</button>
      </div>
      </div>
      </div>
      `
        }

})

