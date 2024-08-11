header = document.querySelector('header')
buttonBack = document.querySelector('.buttonBack')
front = document.querySelectorAll('.front')
back = document.querySelectorAll('.back')
containerProducts = document.querySelector('.grid-container')

let products = []

fetch('./js/products.json')
  .then(response => response.json())
  .then(data => {
    products = data
    loadProducts(products)
  })


window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    header.classList.add('action')
    buttonBack.classList.add('action')
  } else {
    header.classList.remove('action')
    buttonBack.classList.remove('action')
  }
})

function loadProducts(products) {
  containerProducts.innerHTML = ''

  products.forEach(element => {
      const li = document.createElement('li')
      li.innerHTML = `
      <div class="imgs-best-sellers">
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
                    
                    <a href="#">${element.name}</a>
                    <data>$${element.price}</data>
                    
                  </div>
      `;
      containerProducts.appendChild(li)
  });
}

 searchInput = document.querySelector('#search-btn')
 searchCuadro = document.querySelector('#searchInput')
searchInput.addEventListener('click', () => {
    searchCuadro.classList.add('inputSearchActive')
    }
)
