document.addEventListener("DOMContentLoaded", function () {
    const buttonClose = document.querySelector('#button-close')
    const buttonHamburguer = document.querySelector('.menu-hamburguer')
    const menu = document.getElementById('menu-mobile')
        var glide = new Glide(".glide", {
            type: "carousel",
            perView: 4,
            gap: 80,
            peek: {
                before: 0,
                after: 190
            },
            breakpoints: {
                1800: {
                    perView: 3,
                },
                1390: {
                    perView: 3,
                    gap: 70,
                    peek: {
                        before: 0,
                        after: 140
                    }
                },
                1240: {
                    perView: 2,
                    gap: 70,
                    peek: {
                        before: 0,
                        after: 300
                    }
                },
                1239: {
                    perView: 2,
                    gap: 50,
                    peek: {
                        before: 0,
                        after: 60
                    }
                },
                768: {
                    perView: 2,
                    gap: 50,
                    peek: {
                        before: 0,
                        after: 60
                    }  
                },

                560: {
                    perView: 2,
                    gap: 50,
                    peek: {
                        before: 0,
                        after: 0
                    }  
                },

                559: {
                    perView: 1,
                    gap: 10,
                    peek: {
                        before: 0,
                        after: 60
                    }  
                },
            }
        });

        glide.mount();

  document.querySelector(".glide__arrow--next").addEventListener("click", function () {
      glide.go(">");
  });

  document.querySelector(".glide__arrow--prev").addEventListener("click", function () {
    glide.go("<");
});

  function scrollToTop() {
      window.scrollTo({
          top:100,
          left: 100,
          behavior: "smooth"
      })
  }
  
  const button = document.querySelector('#buttonToTop')
  button.addEventListener('click', () => {
    scrollToTop() 
  })


buttonClose.addEventListener('click', () => {
    menu.classList.remove('is-active')   
})

buttonHamburguer.addEventListener('click', () => {
    menu.classList.add('is-active')
    console.log('clicado')
})

});
