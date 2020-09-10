
export default function relojDigital(relojBtn,reloj) {
    const d = document;
    
    d.addEventListener("click", (e) => {
        const fecha= new Date();
        const hora=fecha.getHours();
        const minuto=fecha.getMinutes();
        const segundo=fecha.getSeconds();
        if (e.target.matches(relojBtn)) {

            
            console.log(`${hora}:${minuto}:${segundo}`);
            const $contenido= d.querySelector(reloj);
            $contenido.textContent=`${hora}:${minuto}:${segundo}`;
            
            

        }
        //setTimeout(relojDigital(relojBtn,reloj),1000);

    });

}