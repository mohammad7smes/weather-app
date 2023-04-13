// for mobile screen >768px

const searchView = document.querySelector(".search-view")
const searchBtn = document.querySelector('.search-icon')


searchBtn.addEventListener("click", () => {
    searchView.classList.add("active")
})

const leadingIcon = document.querySelector('.backtoHome')

leadingIcon.addEventListener('click',()=>{
    searchView.classList.remove("active")
})