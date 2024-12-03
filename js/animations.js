let lastScrollTop = 0;
const header = document.querySelector("header");
const py3Element = document.querySelector(".py-3");
const logo = document.getElementById("logo");

// JavaScript
const areasOfWork = document.getElementById('areas-of-work');
const career = document.getElementById('career-programs');
const working = document.getElementById('working-at-meta');
const chevron = document.querySelector('.bi-chevron-down'); 
const chevron1 = document.querySelector('.bi-chevron-down_1'); 
const chevron2 = document.querySelector('.bi-chevron-down_2'); 
const areasOfWorkmb = document.getElementById('areas-of-work-mb');
const careermb = document.getElementById('career-programs-mb');
const workingmb = document.getElementById('working-at-meta-mb');
const chevronmb = document.querySelector('.bi-chevron-down-mb'); 
const chevronmb1 = document.querySelector('.bi-chevron-down-mb1'); 
const chevronmb2 = document.querySelector('.bi-chevron-down-mb2'); 


// Khi hover vào mục "Teams"
areasOfWork.addEventListener('mouseenter', () => {
    header.classList.add('expanded');
    chevron.classList.add('bi-chevron-up');
    header.classList.remove('expanded_1');
    header.classList.remove('expanded_2');
    chevron1.classList.remove('bi-chevron-up_1');
  chevron2.classList.remove('bi-chevron-up_2');


});

// Khi rời khỏi mục "Teams"
areasOfWork.addEventListener('mouseleave', () => {
    // header.classList.remove('expanded');
    // chevron.classList.remove('bi-chevron-up');
    header.classList.remove('expanded_1');
    header.classList.remove('expanded_2');
  chevron1.classList.remove('bi-chevron-up_1');
  chevron2.classList.remove('bi-chevron-up_2');

    
});

header.addEventListener('mouseleave', () => {
  header.classList.remove('expanded');
  header.classList.remove('expanded_1');
  header.classList.remove('expanded_2');

  chevron.classList.remove('bi-chevron-up');
  chevron1.classList.remove('bi-chevron-up_1');
  chevron2.classList.remove('bi-chevron-up_2');
});

// Khi hover vào mục "Teams"
career.addEventListener('mouseenter', () => {
  header.classList.add('expanded_1');
  chevron1.classList.add('bi-chevron-up_1');
  header.classList.remove('expanded');
  header.classList.remove('expanded_2');
  chevron.classList.remove('bi-chevron-up');
  chevron2.classList.remove('bi-chevron-up_2');

});

career.addEventListener('mouseleave', () => {
  // header.classList.remove('expanded_1');
  // chevron1.classList.remove('bi-chevron-up_1');
  header.classList.remove('expanded');
  header.classList.remove('expanded_2');
  chevron.classList.remove('bi-chevron-up');
  chevron2.classList.remove('bi-chevron-up_2');

});

working.addEventListener('mouseenter', () => {
  header.classList.add('expanded_2');
  chevron2.classList.add('bi-chevron-up_2');
  header.classList.remove('expanded');
  header.classList.remove('expanded_1');
  chevron.classList.remove('bi-chevron-up');
  chevron1.classList.remove('bi-chevron-up_1');

  
});

// Khi rời khỏi mục "Teams"
working.addEventListener('mouseleave', () => {
  // header.classList.remove('expanded_2');
  // chevron2.classList.remove('bi-chevron-up_2');
  header.classList.remove('expanded');
  header.classList.remove('expanded_1');
  chevron.classList.remove('bi-chevron-up');
  chevron1.classList.remove('bi-chevron-up_1');

});


function toggleMenu() {
  const hiddenList = document.querySelector(".hidden-list-mobile");
  hiddenList.classList.toggle("show-menu");
  document.body.classList.toggle("no-scroll");
  console.log(1);
}

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Kiểm tra xem phần tử đã có lớp 'active' chưa
    const isActive = this.parentElement.classList.contains("active");

    // Xóa lớp 'active' khỏi tất cả các phần tử li
    navLinks.forEach((link) => link.parentElement.classList.remove("active"));

    // Nếu phần tử chưa có lớp 'active', thêm lớp 'active' cho nó
    if (!isActive) {
      this.parentElement.classList.add("active");
    }
  });
});

// Xử lý sự kiện khi cuộn trang
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Kiểm tra xem người dùng cuộn xuống hay cuộn lên
  if (scrollTop > lastScrollTop) {
    // Cuộn xuống, ẩn header
    header.classList.add("header-hidden");
    header.classList.remove("header-active");
  } else {
    // Cuộn lên, hiển thị header
    header.classList.remove("header-hidden");
    header.classList.add("header-active");
  }

  // Cập nhật vị trí cuộn
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



// Toggle trạng thái cho mục "Teams"
areasOfWorkmb.addEventListener('click', () => {
  const isExpanded = header.classList.contains('expanded_mb');
  
  // Xóa trạng thái cũ
  header.classList.remove('expanded_mb_1', 'expanded_mb_2');
  chevronmb1.classList.remove('bi-chevron-up-mb1');
  chevronmb2.classList.remove('bi-chevron-up-mb2');
  
  // Toggle trạng thái hiện tại
  if (isExpanded) {
    header.classList.remove('expanded_mb');
    chevronmb.classList.remove('bi-chevron-up-mb');
  } else {
    header.classList.add('expanded_mb');
    chevronmb.classList.add('bi-chevron-up-mb');
  }
});

// Toggle trạng thái cho mục "Careers"
careermb.addEventListener('click', () => {
  const isExpanded = header.classList.contains('expanded_mb_1');
  
  // Xóa trạng thái cũ
  header.classList.remove('expanded_mb', 'expanded_mb_2');
  chevronmb.classList.remove('bi-chevron-up-mb');
  chevronmb2.classList.remove('bi-chevron-up-mb2');
  
  // Toggle trạng thái hiện tại
  if (isExpanded) {
    header.classList.remove('expanded_mb_1');
    chevronmb1.classList.remove('bi-chevron-up-mb1');
  } else {
    header.classList.add('expanded_mb_1');
    chevronmb1.classList.add('bi-chevron-up-mb1');
  }
});

// Toggle trạng thái cho mục "Working"
workingmb.addEventListener('click', () => {
  const isExpanded = header.classList.contains('expanded_mb_2');
  
  // Xóa trạng thái cũ
  header.classList.remove('expanded_mb', 'expanded_mb_1');
  chevronmb.classList.remove('bi-chevron-up-mb');
  chevronmb1.classList.remove('bi-chevron-up-mb1');
  
  // Toggle trạng thái hiện tại
  if (isExpanded) {
    header.classList.remove('expanded_mb_2');
    chevronmb2.classList.remove('bi-chevron-up-mb2');
  } else {
    header.classList.add('expanded_mb_2');
    chevronmb2.classList.add('bi-chevron-up-mb2');
  }
});


const menu = document.querySelector('.hidden-list-mobile');
const body = document.body;

// Mở menu
const openMenu = () => {
    menu.classList.add('show-menu');
    body.classList.add('no-scroll'); // Ngăn cuộn trên body
};

// Đóng menu
const closeMenu = () => {
    menu.classList.remove('show-menu');
    body.classList.remove('no-scroll'); // Cho phép cuộn lại
};

// Ví dụ: Gắn sự kiện click để mở menu
document.querySelector('.invisible-list-click').addEventListener('click', openMenu);

// Ví dụ: Gắn sự kiện click để đóng menu (thêm nút đóng trong menu)
document.querySelector('.bi-x-container').addEventListener('click', closeMenu);
