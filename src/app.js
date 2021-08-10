// preloader
window.onload = function () {
    document.querySelector('.preloader').style.display = "none";
};
// date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// checked btn
const doneBtns = document.querySelectorAll('.done-btn');
doneBtns.forEach(function(doneBtn){
   doneBtn.addEventListener('click', function(e){
    //console.log(e.currentTarget.parentElement.parentElement);
    const listItem = e.currentTarget.parentElement.parentElement;
    listItem.classList.toggle('checked');
   });
});