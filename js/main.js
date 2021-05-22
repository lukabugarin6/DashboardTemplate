// NAV
const checkbox = document.querySelector('.checkbox');
const userNav = document.querySelector('.content__user-nav');

// SIDENAV BUTTONS
const sidenavButtons = document.querySelectorAll('.content__user-nav ul li button');

const handleSidenavButtonsClass = (e) => {
    sidenavButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
}

const handleNav = (e) => {
    if(e.target.checked) {
        userNav.classList.add('active')
    }else {
        userNav.classList.remove('active');
    }
}
checkbox.addEventListener('change',handleNav)
sidenavButtons.forEach(btn => btn.addEventListener('click', handleSidenavButtonsClass));