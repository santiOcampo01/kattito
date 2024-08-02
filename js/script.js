header = document.querySelector('header')
buttonBack = document.querySelector('.buttonBack')
iconProducts = document.querySelectorAll('.iconProducts')
front = document.querySelectorAll('.front')
back = document.querySelectorAll('.back')



window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    header.classList.add('action')
    buttonBack.classList.add('action')
  } else {
    header.classList.remove('action')
    buttonBack.classList.remove('action')
  }
})

iconProducts.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id
        front.addEventListener('click', () => {
            front.classList.add('active')
            back.classList.add('active')
        }  )
        console.log(buttonId)
    })
    }
)

 searchInput = document.querySelector('#search-btn')
 searchCuadro = document.querySelector('#searchInput')
searchInput.addEventListener('click', () => {
    searchCuadro.classList.add('inputSearchActive')
    }
)



