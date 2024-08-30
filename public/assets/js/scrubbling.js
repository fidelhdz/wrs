(() => {
    const thePage = document.querySelector(`div.video-background`);
    const theVideo = thePage.querySelector(`video`);

    theVideo.pause();

    const scroll = () => {
        const distancia = window.scrollY - thePage.offsetTop;
        const total = thePage.clientHeight - window.innerHeight;

        let porcentaje = distancia / total;
        porcentaje = Math.max(0, porcentaje);
        porcentaje = Math.min(porcentaje, 1);

        if (theVideo.duration > 0) {
            theVideo.currentTime = theVideo.duration * porcentaje;
        }
    }

    scroll();

    window.addEventListener(`scroll`, scroll);
})();