function activateTab(element, tabName) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    localStorage.setItem('activeTab', tabName);
}
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab') || 'men';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.textContent.toLowerCase() === activeTab) {
            link.classList.add('active');
        }
    });
});
function setActive(link) {
    let links = document.querySelectorAll('.nav1 .header-links');
    links.forEach(function (item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
}

// 
function showMore(event) {
    event.preventDefault();
    document.querySelector('.hidden-text').style.display = 'inline';
    event.target.style.display = 'none';
}



function activateTab(element, tabName) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    localStorage.setItem('activeTab', tabName);
}
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab') || 'men';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.textContent.toLowerCase() === activeTab) {
            link.classList.add('active');
        }
    });
});
function setActive(link) {
    let links = document.querySelectorAll('.nav1 .header-links');
    links.forEach(function (item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
}
let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide() {
    document.getElementById("slider").style.transform = `translateX(-${index * 1360}px)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}
function toggleStar(element) {
    element.classList.toggle("selected");
}

let currentIndex = 0;
const slider = document.getElementById("slider");
const totalItems = 12; // Jami mahsulotlar soni
const itemsPerSlide = 4; // Har safar 4 tadan ko‘rsatamiz
const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1; // Eng oxirgi indeks

function updateSlider() {
    const translateX = -currentIndex * (321 * itemsPerSlide + 10 * itemsPerSlide);
    slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}



let currentPage = 1;
const totalPages = 54;

function updatePagination() {
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";

    let startPage = currentPage - 1;
    let endPage = currentPage + 1;

    if (startPage < 1) {
        startPage = 1;
        endPage = 3;
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - 2;
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement("span");
        pageNumber.classList.add("page-number");
        if (i === currentPage) {
            pageNumber.classList.add("active");
        }
        pageNumber.textContent = i;
        pageNumber.onclick = () => goToPage(i);
        pageNumbers.appendChild(pageNumber);
    }

    if (currentPage < totalPages - 1) {
        pageNumbers.innerHTML += `<span class="page-number">...</span>`;
        const lastPage = document.createElement("span");
        lastPage.classList.add("page-number");
        lastPage.textContent = totalPages;
        lastPage.onclick = () => goToPage(totalPages);
        pageNumbers.appendChild(lastPage);
    }

    document.getElementById("prevBtn").disabled = (currentPage === 1);
    document.getElementById("nextBtn").disabled = (currentPage === totalPages);
}

function changePage(step) {
    if (currentPage + step >= 1 && currentPage + step <= totalPages) {
        currentPage += step;
        updatePagination();
    }
}

function goToPage(page) {
    currentPage = page;
    updatePagination();
}

updatePagination();