const menuButtons = document.querySelectorAll('.menu button');
const contentDivs = document.querySelectorAll('.content div');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active state from all buttons and content divs
        menuButtons.forEach(btn => btn.classList.remove('active'));
        contentDivs.forEach(div => div.classList.remove('active'));

        // Add active state to clicked button
        button.classList.add('active');
        // Show the corresponding content div
        const targetContent = document.getElementById(button.dataset.target);
        targetContent.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu button');
    const contentItems = document.querySelectorAll('.content > div');
    const progressBarContainers = document.querySelectorAll('.progress-bar-container');
    const progressBars = document.querySelectorAll('.progress-bar');

    let currentIndex = 0;
    let interval;
    const duration = 5000; // 5 seconds for each content
    const totalContent = contentItems.length;

    function updateActiveContent(index) {
        menuButtons.forEach(btn => btn.classList.remove('active'));
        contentItems.forEach(item => item.classList.remove('active'));
        progressBarContainers.forEach(container2 => container2.style.display = 'none'); // Hide all progress bars
        progressBars.forEach(bar => bar.style.width = '0%'); // Reset all progress bars

        menuButtons[index].classList.add('active');
        contentItems[index].classList.add('active');

        progressBarContainers[index].style.display = 'block'; // Show the progress bar of the current content
        resetProgressBar(index);
        startProgressBar(index);
    }

    function resetProgressBar(index) {
        progressBars[index].style.width = '0%';
    }

    function startProgressBar(index) {
        progressBars[index].style.width = '0%'; // Reset to 0% initially
        setTimeout(() => {
            progressBars[index].style.width = '100%'; // Smoothly increase the width to 100%
        }, 10); // Small delay to allow transition to take effect
    }

    function changeContent() {
        currentIndex = (currentIndex + 1) % totalContent;
        updateActiveContent(currentIndex);
    }

    function startAutoPlay() {
        interval = setInterval(changeContent, duration);
    }

    function stopAutoPlay() {
        clearInterval(interval); // Stop autoplay
    }

    menuButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            stopAutoPlay();
            currentIndex = index;
            updateActiveContent(index);
            startAutoPlay();
        });
    });

    // Initialize autoplay
    updateActiveContent(currentIndex);
    startAutoPlay();
});

let currentIndex = 0;
const images = document.querySelectorAll('.mobile-content > div');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
    images[currentIndex].style.display = 'none';
    dots[currentIndex].classList.remove('active');

    currentIndex = index;

    images[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => changeSlide(index));
});

function nextSlide() {
    changeSlide((currentIndex + 1) % images.length);
}

function prevSlide() {
    changeSlide((currentIndex - 1 + images.length) % images.length);
}

document.querySelector('.btn_left').addEventListener('click', prevSlide);
document.querySelector('.btn_right').addEventListener('click', nextSlide);

// Initialize the first slide
changeSlide(0);
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon_mxh .icon2");
    const images = document.querySelectorAll(".img_mxh img");
    const texts = document.querySelectorAll(".text_mxh p");

    // Đặt trạng thái mặc định
    function setDefaultState() {
        icons.forEach((icon2) => {
            const target = icon2.getAttribute("data-target");
            const defaultSrc = `./images/${target}1.jpg`;
            icon2.setAttribute("src", defaultSrc);
            icon2.classList.remove("active");
        });

        // Đặt hình đầu tiên (meta) thành trạng thái active
        const firstIcon = document.querySelector('.icon2[data-target="meta"]');
        firstIcon.setAttribute("src", "./images/meta2.jpg");
        firstIcon.classList.add("active");

        // Hiển thị nội dung của meta
        document.querySelectorAll(".img_mxh img, .text_mxh p").forEach((el) => {
            el.classList.remove("active");
        });
        document.querySelector(".content-meta").classList.add("active");
        document.querySelector(".text-meta").classList.add("active");
    }

    // Xử lý click
    icons.forEach((icon2) => {
        icon2.addEventListener("click", function () {
            const target = this.getAttribute("data-target");

            // Reset tất cả icon về trạng thái mặc định
            icons.forEach((icon2) => {
                const defaultSrc = `./images/${icon2.getAttribute("data-target")}1.jpg`;
                icon2.setAttribute("src", defaultSrc);
                icon2.classList.remove("active");
            });

            // Đặt trạng thái active cho icon được nhấn
            const activeSrc = `./images/${target}2.jpg`;
            this.setAttribute("src", activeSrc);
            this.classList.add("active");

            // Hiển thị nội dung tương ứng
            images.forEach((img) => img.classList.remove("active"));
            texts.forEach((text) => text.classList.remove("active"));

            document.querySelector(`.content-${target}`).classList.add("active");
            document.querySelector(`.text-${target}`).classList.add("active");
        });
    });

    // Thiết lập trạng thái mặc định khi tải trang
    setDefaultState();
});
function toggleVisibility(target) {
    // Đầu tiên ẩn tất cả các phần tử
    const allTexts = document.querySelectorAll('.title_mxh p');
    allTexts.forEach(text => text.classList.remove('active'));

    // Hiển thị phần tử có target tương ứng
    const targetText = document.querySelector(`.text-${target}`);
    if (targetText) {
        targetText.classList.add('active');
    }
}
// Mảng chứa tất cả các ID của các văn bản
const iconTexts = ['meta', 'facebook', 'instagram', 'threat', 'whatchat', 'messger'];

function toggleVisibility(target) {
    // Ẩn tất cả các phần tử icon-text trước
    iconTexts.forEach(icon2 => {
        const textElement = document.getElementById(`${icon2}-text`);
        if (textElement) {
            textElement.style.display = 'none';
        }
    });

    // Hiển thị phần tử icon-text tương ứng
    const activeTextElement = document.getElementById(`${target}-text`);
    if (activeTextElement) {
        activeTextElement.style.display = 'inline';
    }
}
// hau