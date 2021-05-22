const checkbox = document.querySelector('.checkbox');
const userNav = document.querySelector('.content__user-nav');

const handleNav = (e) => {
    if(e.target.checked) {
        userNav.classList.add('active')
    }else {
        userNav.classList.remove('active');
    }
}
checkbox.addEventListener('change',handleNav)
