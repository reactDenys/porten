const header = document.getElementById('header');

const headerFixed = () => {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.padding = '0 0';
    header.style.lineHeight = '0.8';
}

const headerAbsolute = () => {
    header.style.position = 'absolute';
    header.style.lineHeight = '1.5';
    header.style.top = '40px';
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 600) {
        headerFixed()
    } else {
        headerAbsolute()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    window.scrollY >= 600 ? headerFixed() : 0
})