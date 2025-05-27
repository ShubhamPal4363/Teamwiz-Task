window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("shadow-sm");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("shadow-sm");
    navbar.classList.remove("bg-dark");
  }
});

/* Close Nav On Select */
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // This will trigger Bootstrap to close the menu
    }
  });
});

/* Menu MD */
const filters = document.querySelectorAll('.filter-item');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
  });
});

/* Swiper Team */
const swiperTeam = new Swiper('.team__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 32,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  }
});

