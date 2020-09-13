//const { default: hamburgerMenu } = require();

import hamburgerMenu from "./dom/menu_hamburguesa.js";

import{digitalClock, alarm} from "./dom/reloj.js";
import{shortcuts, moveBall} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/botton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webcam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";

//import relojDigital from "./dom/reloj-digital.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    //setTimeout(relojDigital(".reloj-btn",".reloj"),1000);
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");

    countdown("countdown","Aug 05,2021 03:23:19","Feliz cumpleaños Mario");

    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://www.youtube.com/watch?v=QCmOoiHknJg" target="_blank" rel="noopener">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/QCmOoiHknJg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)",`<a href="https://goo.gl/maps/nUuvFnBbe6ap943n6" target="_blank" rel="noopener">Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5517.646526039296!2d-77.00013189369137!3d-12.073403661727005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c63ac674b3a1%3A0x42b7a0e54a4ad031!2sUrb.%20San%20Luis%2C%20Cercado%20de%20Lima%2015021!5e0!3m2!1ses-419!2spe!4v1599765957925!5m2!1ses-419!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    //webcam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    
});


d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});


darkTheme(".dark-theme-btn","dark-mode");
networkStatus();