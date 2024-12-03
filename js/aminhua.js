
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // Hoặc 'vertical'
    loop: true, // Kích hoạt chế độ vòng lặp
    slidesPerView: 3, // Hiển thị 3 slide cùng lúc
    centeredSlides: true, // Slide trung tâm lớn hơn
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    effect: 'slide', // Hoặc 'fade', 'cube', 'coverflow', 'flip'
    slideToClickedSlide: true, // Kích hoạt chuyển slide khi click
    allowTouchMove: true, // Cho phép vuốt để chuyển slide
    loopAdditionalSlides: 2, // Đảm bảo hiển thị đúng các slide khi vòng lặp
    // breakpoints: {
    //     768: {
    //       slidesPerView: 3,
          
    //     },
        // 480: {
        //   slidesPerView: 1,
        // },
    //   },
    //   on: {
    //     slideChangeTransitionStart: function () {
    //       const slides = document.querySelectorAll('.swiper-slide');
    //       slides.forEach((slide) => {
    //         slide.style.transform = 'scale(0.8)'; // Thu nhỏ mặc định
    //       });
    //       const activeSlide = document.querySelector('.swiper-slide-active');
    //       if (activeSlide) {
    //         activeSlide.style.transform = 'scale(1)'; // Slide trung tâm phóng to
    //       }
    //     },
    // }
});
