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
