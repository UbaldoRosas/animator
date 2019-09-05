var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var scrollPos = window.scrollY + Math.floor(windowHeight / 2);

// Array de elementos que se van a animar
var animElems = [];

// Busca todos los elementos que se van a animar y los agrega al array animElems
function setAnimElems() {
    let animElems = [];

    $('.animated').each(function() {
        let e = {
            $ : $(this), 
            offset : $(this).offset().top
        }

        animElems.push(e);
    });

    return animElems;
}

function animate(elems) { 

    // Filtra los elementos que están visibles y aún no han sido animados
    let elemsToAnim = elems.filter( e => {
        return e.$.hasClass('go') == false && e.offset < scrollPos
    });

    // Los elementos que ya estén visibles se animarán
    for (let i = 0; i < elemsToAnim.length; i++) {
        const e = elemsToAnim[i];
        e.$.addClass('go'); 
    }
}




$(document).ready(function () {

    animElems = setAnimElems();

    animate(animElems);

});


$(window).resize(function () { 
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    animElems = setAnimElems();
    animate(animElems);
});


$(window).scroll(function () { 
    scrollPos = window.scrollY + Math.floor(windowHeight / 2);

    animate(animElems);
});