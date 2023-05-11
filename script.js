const fieldsetContenedor = document.querySelector("fieldset");

const IMG_1 = "https://images.hola.com/imagenes/mascotas/20220825215578/conejos-costumbres-caracteristicas-dn/1-127-664/manias-costumbres-conejos-t.jpg";
const IMG_2 = "https://i.ytimg.com/vi/spqob0Ik-7g/maxresdefault.jpg";
const IMG_3 = "https://animales.me/wp-content/uploads/2020/04/Cr%C3%ADa-de-conejo-Rex-de-color-gris.jpg";

let imagenActual = 1

function agregarImg() {
    let imgLink;

    if (imagenActual === 1) {
        imgLink = IMG_1;
        imagenActual = 2;
    } else if (imagenActual === 2) {
        imgLink = IMG_2;
        imagenActual = 3;
    } else {
        imgLink = IMG_3;
        imagenActual = 1;
    }

    fieldsetContenedor.innerHTML += `
    <img src="${imgLink}" alt="test">
    `;
}

function quitarImg(){
    fieldsetContenedor.innerHTML -= 
    `
    <img src="${imgLink}" alt="test">`
}