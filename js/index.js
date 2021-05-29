// -------------   Swiper Slider  -------------
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 75,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },


  // Pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    1024: {
      spaceBetween: 50,
    },

    768: {
      spaceBetween: 0,
    },

    320: {
      spaceBetween: 15,
    },
  }
});

// -------------   Tabs  -------------
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work__content').forEach(function(tabContent) {
        tabContent.classList.remove('work__content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work__content_active')
    })
  })
})

// -------------   Accordion  -------------
$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    active: false,
    collapsible: true});
} );

// -------------   Burger menu  -------------
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger-btn').addEventListener('click', function() {
      document.querySelector('#burger-menu').classList.toggle('is-active')
  })
})
