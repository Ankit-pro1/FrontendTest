// Taking the required element
let toggleBtn = document.querySelector(".toggle-btn"),
toggleBtnIcon = document.querySelector(".toggle-btn i"),
dropdownList = document.querySelector(".dropdown-list")


toggleBtn.addEventListener('click',()=>{
    dropdownList.classList.toggle("active");
    const isActive = dropdownList.classList.contains("active");

    toggleBtnIcon.classList = isActive?'fa-sharp fa-solid fa-xmark':'fa-sharp fa-solid fa-bars';

})