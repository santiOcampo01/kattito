document.addEventListener('DOMContentLoaded', function () {
  const currentPage = document.body.id
  header = document.querySelector('header')
  buttonBack = document.querySelector('.buttonBack')
  
  window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    header.classList.add('action')
    buttonBack.classList.add('action')
  } else {
    header.classList.remove('action')
    buttonBack.classList.remove('action')
  }
})

let products = []

  fetch('./js/products.json')
    .then(response => response.json())
    .then(data => {
      products = data
      if (currentPage === 'main') {
        loadProducts(products)
      } else if (currentPage === 'productDescription') {
              const id = new URLSearchParams(window.location.search).get('id')
        const productDescription = products.find(product => product.id == id)
        description(productDescription)
      }
    })

function loadProducts(products) {
  containerProducts = document.querySelector('.grid-container')
  containerProducts.innerHTML = ''

  products.forEach(element => {
    const li = document.createElement('li')
    li.innerHTML = `
      <div class="imgs-best-sellers">
                    <a href="../productDescription.html?id=${element.id}">
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
    containerProducts.appendChild(li)
  })
}

    function description(products) {
      descriptionProduct = document.querySelector('#containerProductDescription')
      header.backgroundColor = 'var(--portland-orange)'
      header.style.hover = 'var(--portland-orange)'
        window.addEventListener('scroll', function () {
          header.style.position = this.window.scrollY > 10 ? 'fixed' : 'relative'
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
      <a href="../index.html" class="backDescription">Volver</a>
      <button class="buttonAdd">Agregar al carrito</button>
      </div>
      </div>
      </div>
      `
        }

})





//  searchInput = document.querySelector('#search-btn')
//  searchCuadro = document.querySelector('#searchInput')
// searchInput.addEventListener('click', () => {
//     searchCuadro.classList.add('inputSearchActive')
//     }
// )

