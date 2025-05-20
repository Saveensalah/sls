document.addEventListener( 'DOMContentLoaded', function() {

  const hamburger = document.querySelector('#hamburgerMenu')
  const mobileMenu = document.querySelector('#mobileMenu')
  const menuLinks = document.querySelector('#mobileMenu a')

  hamburger.addEventListener( 'click', function() {
    mobileMenu.classList.toggle('showMenu')
    hamburger.classList.toggle('active')
  })

  menuLinks.addEventListener( 'click', function() {
    mobileMenu.classList.toggle('showMenu')
    hamburger.classList.toggle('active')
  })

} );