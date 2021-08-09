// preloader
window.onload = function () {
    document.querySelector('.preloader').style.display = "none";
};
// date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// defaoult text
let inputItem = document.getElementById('inputItem');
const dumby = inputItem.getAttribute('value')
