
// Swiper js
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

//   Counter
   new PureCounter();


//   Aos animation
   AOS.init(); 


// map-box
   mapboxgl.accessToken = 'pk.eyJ1IjoiYnRyYXZlcnN5IiwiYS61mNrbmh0dXF1NzBtbnMyb3mzcTBpaG10eXcifQ.h5ZyYCglnMdoLAGGiL1Auw';
var map = new mapboxgl.Map({
  contanier: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.060982, 42.35725],
  zoom: 18,
});