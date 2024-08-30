function showText(theClass) {
    const elemento = `.` + theClass;
    const proyectoTexto = document.querySelector(elemento);

    document.querySelectorAll(`.proyecto-texto`).forEach((el) => {
        el.style.display = `none`;
    });

    proyectoTexto.style.display = `block`;
}

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