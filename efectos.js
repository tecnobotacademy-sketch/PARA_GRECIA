/* =====================================================
   LLUVIA DE PÉTALOS
===================================================== */

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

    petalo.style.left =
        Math.random() * 100 + "vw";


    /* Duración */

    const duracion =
        5 + Math.random() * 5;


    petalo.style.setProperty(
        "--duracion",
        duracion + "s"
    );


    /* Movimiento lateral */

    petalo.style.setProperty(
        "--movimiento",
        (Math.random() * 160 - 80) + "px"
    );


    petalo.style.setProperty(
        "--movimiento-final",
        (Math.random() * 240 - 120) + "px"
    );


    /* Tamaño aleatorio */

    const escala =
        0.6 + Math.random() * 0.8;


    petalo.style.transform =
        `scale(${escala})`;


    /* Transparencia */

    petalo.style.opacity =
        0.55 + Math.random() * 0.4;


    /* Agregar */

    contenedorPetalos.appendChild(
        petalo
    );


    /* Eliminar cuando termina */

    setTimeout(() => {

        petalo.remove();

    }, (duracion + 0.5) * 1000);
}


/* Crear pétalos continuamente */

setInterval(
    crearPetalo,
    550
);


/* Pétalos iniciales */

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        crearPetalo,
        i * 250
    );
}



/* =====================================================
   ESTRELLAS
===================================================== */

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


    estrella.textContent =
        simbolos[
            Math.floor(
                Math.random() *
                simbolos.length
            )
        ];


    /* Posición */

    estrella.style.left =
        x + "px";

    estrella.style.top =
        y + "px";


    /* Movimiento */

    estrella.style.setProperty(
        "--dx",
        (Math.random() * 140 - 70) + "px"
    );


    estrella.style.setProperty(
        "--dy",
        (Math.random() * -160 - 40) + "px"
    );


    document.body.appendChild(
        estrella
    );


    setTimeout(() => {

        estrella.remove();

    }, 1100);
}



/* =====================================================
   CORAZONES
===================================================== */

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


    corazon.textContent =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];


    /* Posición */

    corazon.style.left =
        x + "px";

    corazon.style.top =
        y + "px";


    /* Movimiento */

    corazon.style.setProperty(
        "--dx",
        (Math.random() * 160 - 80) + "px"
    );


    corazon.style.setProperty(
        "--dy",
        (Math.random() * -180 - 50) + "px"
    );


    corazon.style.setProperty(
        "--rotacion",
        (Math.random() * 80 - 40) + "deg"
    );


    document.body.appendChild(
        corazon
    );


    setTimeout(() => {

        corazon.remove();

    }, 1300);
}



/* =====================================================
   EFECTO AL TOCAR LA PANTALLA
===================================================== */

document.addEventListener(
    "touchstart",
    function(evento) {

        const touch =
            evento.touches[0];


        const x =
            touch.clientX;

        const y =
            touch.clientY;


        /* Estrellas */

        for (
            let i = 0;
            i < 3;
            i++
        ) {

            crearEstrella(

                x +
                (Math.random() * 50 - 25),

                y +
                (Math.random() * 50 - 25)

            );
        }


        /* Corazones */

        for (
            let i = 0;
            i < 2;
            i++
        ) {

            crearCorazon(

                x +
                (Math.random() * 60 - 30),

                y +
                (Math.random() * 40 - 20)

            );
        }

    },
    {
        passive: true
    }
);



/* =====================================================
   EFECTO AL HACER CLICK
===================================================== */

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
                (Math.random() * 60 - 30),

                y +
                (Math.random() * 60 - 30)

            );
        }


        /* Corazones */

        for (
            let i = 0;
            i < 2;
            i++
        ) {

            crearCorazon(

                x +
                (Math.random() * 70 - 35),

                y +
                (Math.random() * 50 - 25)

            );
        }

    }
);
