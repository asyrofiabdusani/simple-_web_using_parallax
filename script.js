const textJbtron = document.querySelector('.text-jbtron');
const linkJbtron = document.querySelector('.link-jbtron');
const imgJbtron = document.querySelector('.jbtron-img');
const bodyContainer = document.querySelector('.body-container');

window.addEventListener('load', () => {
    textJbtron.style.animation = 'animasiLoadTextDown 3s';
    linkJbtron.style.animation = 'animasiLoadTextUp 3s';
    imgJbtron.style.animation = 'animasiLoadImg 3s';
    bodyContainer.style.opacity = 0;
});

document.addEventListener('scroll', () => {
    let position = Math.round(window.scrollY);
    let imgPosition = Math.round(imgJbtron.getBoundingClientRect().top);
    let slowImgPosition = ((Math.round(imgJbtron.getBoundingClientRect().top)) / 1.5) * -1;

    imgJbtron.style.transform = `translateY(${slowImgPosition}px)`;
    imgJbtron.style.zIndex = `-999`;

    if (position > 50) {
        bodyContainer.style.animation = 'animasiLoadImg 2s forwards';
    }
});

