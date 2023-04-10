/* ======================================
    Index
    =====
    2. Home slider 
    3. Hemo Rage 
    4. Best Seller
    5. Shop
    6. Stack
====================================== */

/* =====================================
    2. Home slider 
 =====================================*/
var homeSlider = new Swiper(".home-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* =====================================
    3. Hemo Rage 
 =====================================*/
var hemoRage = new Swiper(".hemo-rage-slider", {
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* =====================================
    4. Best Seller
 =====================================*/
$(document).ready(function () {
  let img = $(".product .product-img>img");
  let imgCaption = $(".product .product-caption");
  $(".product .product-list li>img").click(function () {
    $(this).parent("li").addClass("active");
    $(this).parent("li").siblings().removeClass("active");
    $(this).parents(".product").find(img).attr("src", $(this).attr("data-src"));
    $(this)
      .parents(".product")
      .find(imgCaption)
      .text($(this).attr("data-caption"));
  });
});
/* =====================================
    5. Shop
 =====================================*/
var swiperShop = new Swiper(".myShop", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView:2,
    },
    280: {
      slidesPerView:1,
    },
  },
});

/* =====================================
    6. Stack
 =====================================*/
var swiper = new Swiper(".myStack", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView:2,
    },
    280: {
      slidesPerView:1,
    },
  },
});