let animado = document.querySelectorAll(".circle1");



function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 300 < scrollTop) {
            console.log("hola")
            animado[i].style.segundos_circle1 = 165.2;
            //animado[i].style.animation = 5;
        };
    };
};

window.addEventListener('scroll',  mostrarScroll);