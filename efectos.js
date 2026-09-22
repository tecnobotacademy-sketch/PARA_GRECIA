/* =====================================================
   EFECTOS DE LA CARTA PARA GRECIA
===================================================== */


/* =====================================================
   CREAR ESTRELLA
===================================================== */

function crearEstrella(x, y) {

    const estrella =
        document.createElement("div");

    estrella.className =
        "estrella";


    const simbolos = [
        "✦",
        "✧",
        "⋆",
        "✨",
        "✩"
    ];


    estrella.textContent =
        simbolos[
            Math.floor(
                Math.random() *
                simbolos.length
            )
        ];


    /* Posición inicial */

    estrella.style.left =
        x + "px";

    estrella.style.top =
        y + "px";


    /* Movimiento horizontal */

    estrella.style.setProperty(
        "--dx",
        (Math.random() * 80 - 40) + "px"
    );


    /* Movimiento vertical */

    estrella.style.setProperty(
        "--dy",
        (Math.random() * -100 - 20) + "px"
    );


    document.body.appendChild(
        estrella
    );


    /* Eliminar después de la animación */

    setTimeout(
        () => {
            estrella.remove();
        },
        900
    );
}


/* =====================================================
   ESTRELLAS AL TOCAR LA PANTALLA
===================================================== */

document.addEventListener(
    "touchstart",
    function (evento) {

        const touch =
            evento.touches[0];


        for (
            let i = 0;
            i < 3;
            i++
        ) {

            crearEstrella(

                touch.clientX +
                (
                    Math.random() *
                    30 -
                    15
                ),

                touch.clientY +
                (
                    Math.random() *
                    30 -
                    15
                )
            );
        }

    },
    {
        passive: true
    }
);


/* =====================================================
   ESTRELLAS MIENTRAS SE DESLIZA
===================================================== */

let ultimoX = 0;

let ultimoY = 0;


document.addEventListener(
    "touchmove",
    function (evento) {

        const touch =
            evento.touches[0];


        const distancia =

            Math.abs(
                touch.clientX -
                ultimoX
            )

            +

            Math.abs(
                touch.clientY -
                ultimoY
            );


        /*
         * Solo creamos una estrella
         * después de cierta distancia.
         *
         * Esto evita crear cientos
         * de elementos al mismo tiempo.
         */

        if (distancia > 35) {

            crearEstrella(
                touch.clientX,
                touch.clientY
            );


            ultimoX =
                touch.clientX;

            ultimoY =
                touch.clientY;
        }

    },
    {
        passive: true
    }
);


/* =====================================================
   ESTRELLAS AL HACER CLICK EN PC
===================================================== */

document.addEventListener(
    "click",
    function (evento) {

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            crearEstrella(

                evento.clientX +
                (
                    Math.random() *
                    40 -
                    20
                ),

                evento.clientY +
                (
                    Math.random() *
                    40 -
                    20
                )
            );
        }

    }
);
