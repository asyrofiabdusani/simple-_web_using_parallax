const textJbtron = document.querySelector('.text-jbtron');
const linkJbtron = document.querySelector('.link-jbtron');
const imgJbtron = document.querySelector('.jbtron-img');

window.addEventListener('load', () => {
    textJbtron.style.animation = 'animasiLoadTextDown 3s';
    linkJbtron.style.animation = 'animasiLoadTextUp 3s';
    imgJbtron.style.animation = 'animasiLoadImg 3s';
});

document.addEventListener('scroll', function (e) {
    let position = Math.round(window.scrollY);
    console.log(position);
});