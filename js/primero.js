
/*
const $boton = document.querySelector(".hamburger--collapse");
const $botonActive = document.querySelector(".is-active");
console.log($boton);
console.log($botonActive);
*/


document.addEventListener("click",(e)=>{
    console.log("click en", e.target);

    if (e.target.matches(".hamburger")) {

        e.target.classList.toggle("is-active");
        console.log("q pex");        
    }
});

