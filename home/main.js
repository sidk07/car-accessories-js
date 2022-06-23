let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}


window.onscroll = () => {
    search.classList.remove('active');
}

//Header
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

