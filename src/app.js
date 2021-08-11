// preloader
window.onload = function () {
    document.querySelector('.preloader').style.display = "none";
};
// date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//addBtn onclick
const addItemBtn = document.getElementById('addItemBtn');
addItemBtn.addEventListener('click', function(newElement){
    
});

// newElement Function
function newElement() {
    // console.log('penis');
    // * this is a variable that will create a new list item in the document
    var newItem = document.createElement('li');
    // * this means ur taking the text value/input and declaring it
    var inputValue = document.getElementById('inputItem').value;
    // * this is saying hey the text we just declared, this is what we want to do with it.
    var item = document.createTextNode(inputValue);
    // * attaches the text in the li
    newItem.appendChild(item);
    if(inputValue === '') {
        alert('Write something down');
    } else {
        document.getElementsByTagName('ul').appendChild(newItem)
    }
};

// checked btn
const doneBtns = document.querySelectorAll('.done-btn');
doneBtns.forEach(function(doneBtn){
   doneBtn.addEventListener('click', function(e){
    //console.log(e.currentTarget.parentElement.parentElement);
    const listItem = e.currentTarget.parentElement.parentElement;
    listItem.classList.toggle('checked');
   });
});

// delete btn
const deleteBtns = document.querySelectorAll('delete-btn');
deleteBtns.forEach(function(deleteBtn){
    deleteBtn.addEventListener('click', function(e){
        const listItem = e.currentTarget.parentElement.parentElement;
        
    });
});