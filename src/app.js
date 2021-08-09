// preloader
window.onload = function () {
    document.querySelector('.preloader').style.display = "none";
};

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();