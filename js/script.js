// Function to handle dropdown behavior
function initializeDropdown() {
    let timeoutId; 

    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    function hideDropdownContents() {
        dropdownContents.forEach(function (dropdownContent) {
            dropdownContent.style.display = 'none';
        });
    }

    dropdownBtns.forEach(function (dropdownBtn) {
        const dropdownContent = dropdownBtn.nextElementSibling;

        dropdownBtn.addEventListener('mouseenter', function () {
            clearTimeout(timeoutId);
            hideDropdownContents();
            dropdownContent.style.display = 'block';
        });

        dropdownBtn.addEventListener('mouseleave', function () {
            timeoutId = setTimeout(function () {
                dropdownContent.style.display = 'none';
            }, 300);
        });
    });

    dropdownContents.forEach(function (dropdownContent) {
        dropdownContent.addEventListener('mouseenter', function () {
            clearTimeout(timeoutId);
            this.style.display = 'block';
        });

        dropdownContent.addEventListener('mouseleave', function () {
            timeoutId = setTimeout(function () {
                this.style.display = 'none';
            }.bind(this), 300);
        });
    });
}

// Function to handle scroll events
function initializeScrollEvents() {
    window.addEventListener('scroll', function () {
        const header = document.getElementById('header');

        if (window.pageYOffset > 0) {
            if (!isHeroInView()) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function isHeroInView() {
    const rect = document.getElementById('hero-section').getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});


function updateCurrentPage(page) {
    localStorage.setItem('currentPage', page);
}

function getCurrentPage() {
    return localStorage.getItem('currentPage');
}

function navigateTo(page) {
    updateCurrentPage(page);
    window.location.href = page;
}

function setActiveLink() {
    const currentPage = getCurrentPage();
    const links = document.querySelectorAll('.dropdown-content a');

    links.forEach(link => {
        if (link.href.endsWith(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Event listener for page load
window.addEventListener('load', () => {
    initializeDropdown();
    initializeScrollEvents();
    initializeImageSlider();
    setActiveLink();
});

// Event listener for navigation links
document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = link.getAttribute('href');
        navigateTo(page);
    });
});
