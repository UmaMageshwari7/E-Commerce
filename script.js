// Image Slider
let images = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
let index = 0;

function changeImage(dir) {
    images[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = (index + dir + images.length) % images.length;
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

function setImage(i) {
    images[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = i;
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

// Quick View Popup
function showQuickView(img, title, price) {
    document.getElementById("popup-img").src = img;
    document.querySelector(".popup h2").textContent = title;
    document.querySelector(".popup .price").textContent = price;
    document.getElementById("quick-view").style.display = "block";
}

document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("quick-view").style.display = "none";
});

// Dark Mode
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
