/* =========================================================
   LLUVIA DE PÉTALOS
========================================================= */

const contenedorPetalos =
    document.getElementById("lluvia-petalos");


function crearPetalo() {

    if (!contenedorPetalos) {
        return;
    }


    const petalo =
        document.createElement("div");


    petalo.className =
        "petalo-lluvia";


    /* Posición horizontal */

    const posicion =
        Math.random() * 100;


    petalo.style.left =
        posicion + "vw";


    /* Duración aleatoria */

    const duracion =
        5 + Math.random() * 5;


    petalo.style.setProperty(
        "--duracion",
        duracion + "s"
    );


    /* Movimiento */

    const movimiento =
        Math.random() * 180 - 90;


    const movimientoFinal =
        Math.random() * 260 - 130;


    petalo.style.setProperty(
        "--movimiento",
        movimiento + "px"
    );


    petalo.style.setProperty(
        "--movimiento-final",
        movimientoFinal + "px"
    );


    /* Tamaño */

    const escala =
        0.6 + Math.random() * 0.9;


    petalo.style.transform =
        `scale(${escala})`;


    /* Transparencia */

    petalo.style.opacity =
        0.55 + Math.random() * 0.4;


    /* Agregar a la pantalla */

    contenedorPetalos.appendChild(
        petalo
    );


    /* Eliminar */

    setTimeout(
        function() {

            petalo.remove();

        },
        (duracion + 1) * 1000
    );
}



/* Crear pétalos continuamente */

setInterval(
    crearPetalo,
    450
);



/* Crear varios al iniciar */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(
        crearPetalo,
        i * 180
    );
}



/* =========================================================
   CREAR ESTRELLA
========================================================= */

function crearEstrella(x, y) {

    const estrella =
        document.createElement("div");


    estrella.className =
        "estrella";


    const simbolos = [
        "✦",
        "✧",
        "✨",
        "✩",
        "⋆"
    ];


    const numero =
        Math.floor(
            Math.random() *
            simbolos.length
        );


    estrella.textContent =
        simbolos[numero];


    /* Posición */

    estrella.style.left =
        x + "px";

    estrella.style.top =
        y + "px";


    /* Dirección */

    const dx =
        Math.random() * 140 - 70;


    const dy =
        Math.random() * -160 - 40;


    estrella.style.setProperty(
        "--dx",
        dx + "px"
    );


    estrella.style.setProperty(
        "--dy",
        dy + "px"
    );


    document.body.appendChild(
        estrella
    );


    setTimeout(
        function() {

            estrella.remove();

        },
        1100
    );
}



/* =========================================================
   CREAR CORAZÓN
========================================================= */

function crearCorazon(x, y) {

    const corazon =
        document.createElement("div");


    corazon.className =
        "corazon-click";


    const corazones = [
        "💛",
        "💖",
        "💗",
        "💕",
        "❤️"
    ];


    const numero =
        Math.floor(
            Math.random() *
            corazones.length
        );


    corazon.textContent =
        corazones[numero];


    /* Posición */

    corazon.style.left =
        x + "px";

    corazon.style.top =
        y + "px";


    /* Movimiento */

    const dx =
        Math.random() * 160 - 80;


    const dy =
        Math.random() * -180 - 50;


    const rotacion =
        Math.random() * 80 - 40;


    corazon.style.setProperty(
        "--dx",
        dx + "px"
    );


    corazon.style.setProperty(
        "--dy",
        dy + "px"
    );


    corazon.style.setProperty(
        "--rotacion",
        rotacion + "deg"
    );


    document.body.appendChild(
        corazon
    );


    setTimeout(
        function() {

            corazon.remove();

        },
        1300
    );
}



/* =========================================================
   TOCAR PANTALLA
========================================================= */

document.addEventListener(
    "touchstart",
    function(evento) {

        if (
            !evento.touches ||
            evento.touches.length === 0
        ) {
            return;
        }


        const toque =
            evento.touches[0];


        const x =
            toque.clientX;


        const y =
            toque.clientY;


        /* Crear estrellas */

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            crearEstrella(

                x +
                (Math.random() * 70 - 35),

                y +
                (Math.random() * 70 - 35)

            );
        }


        /* Crear corazones */

        for (
            let i = 0;
            i < 3;
            i++
        ) {

            crearCorazon(

                x +
                (Math.random() * 80 - 40),

                y +
                (Math.random() * 60 - 30)

            );
        }

    },
    {
        passive: true
    }
);



/* =========================================================
   CLICK EN PC
========================================================= */

document.addEventListener(
    "click",
    function(evento) {

        const x =
            evento.clientX;


        const y =
            evento.clientY;


        /* Estrellas */

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            crearEstrella(

                x +
                (Math.random() * 70 - 35),

                y +
                (Math.random() * 70 - 35)

            );
        }


        /* Corazones */

        for (
            let i = 0;
            i < 3;
            i++
        ) {

            crearCorazon(

                x +
                (Math.random() * 80 - 40),

                y +
                (Math.random() * 60 - 30)

            );
        }

    }
);
