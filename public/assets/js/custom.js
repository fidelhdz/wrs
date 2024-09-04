function startLoader() {
    let counterElement = document.querySelector(`.counter`);
    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();

function counterRemove() {
    document.querySelector(`.counter`).style.display = `none`;
}

function barRemove() {
    document.querySelector(`.preloader`).style.display = `none`;
}

gsap.to(`.counter`, 0.25, {
    delay: 3.5,
    opacity: 0,
    onComplete: counterRemove
});

gsap.fromTo('.bar', { backgroundColor: `#0a1e28` }, { backgroundColor: `#010101`, duration: 1.5, delay: 3 });

gsap.to(`.bar`, 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5
    },
    ease: `power4.inOut`,
    onComplete: barRemove
});

function showText(theClass) {
    const elemento = `.` + theClass;
    const proyectoTexto = document.querySelector(elemento);

    document.querySelectorAll(`.proyecto-texto`).forEach((el) => {
        el.style.display = `none`;
    });

    proyectoTexto.style.display = `block`;
}

AOS.init({
    duration: 800,
    easing: `ease-in-out`
});

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll(`.link-to`).forEach((el) => {
    el.addEventListener('mouseover', (el) => {
        const nameClass = el.target.classList[1];
        nameClass.replace(`link-to-`, ``);
        showText(nameClass.replace(`link-to-`, ``));
    });

    el.addEventListener('mouseout', (el) => {
        document.querySelectorAll(`.proyecto-texto`).forEach((el) => {
            el.style.display = `none`;
        });
    });
});

const menuIcon = document.querySelector(`.menu-icon`);
const megaMenu = document.querySelector(`#mega-menu`);

menuIcon.addEventListener(`click`, () => {
    if ( megaMenu.classList.contains(`visible`) ){
        megaMenu.style.animation = `megaMenuOutAnimation forwards 1000ms ease-in-out`;
        megaMenu.addEventListener(`animationend`, () => {
            menuIcon.classList.remove(`icon-close`);
            megaMenu.classList.remove(`visible`);
            megaMenu.removeAttribute(`style`);
        }, {once: true});
    } else {
        megaMenu.classList.add(`visible`);
        menuIcon.classList.add(`icon-close`);
    }
});
