document.addEventListener( 'DOMContentLoaded', function() {

  var splide = new Splide( '#clients_splide', {
    type     : 'loop',
    autoWidth: true,
    heightRatio : 0.1275,
    gap: 'min(90px, 4.6875vw)',
    arrows: false,
    pagination: false,
    breakpoints: {
      500: {
        heightRatio : 0.3,
      },
      992: {
        heightRatio : 0.25,
      },
      1400: {
        heightRatio : 0.155,
        focus: 'center'
      }
    }
  } );
  
  splide.mount();

  document.querySelector('.csc_prev').addEventListener( 'click', function() {
    splide.go('<');
  })

  document.querySelector('.csc_next').addEventListener( 'click', function() {
    splide.go('>');
  })

} );