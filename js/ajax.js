(()=>{
    const xhr= new XMLHttpRequest();
    $xhr=document.getElementById("xhr"),
    $fragment=document.createDocumentFragment();

    

    xhr.addEventListener("readystatechange",(e)=>{
        if(xhr.readyState!==4)return;
        console.log(xhr);
        if (xhr.status>=200 && xhr.status<300) {            
            console.log("exito");
            //$xhr.innerHTML=xhr.responseText;
            let json=JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach((el)=>{
                const $li =document.createElement("li");
                $li.innerHTML=`${el.name}--${el.email}--${el.phone}`;
                $fragment.appendChild($li);
                /*let unidad=$xhr.innerHTML=`<li>${el.name}</li>`;
                $fragment.innerHTML=unidad;*/                
            });
            $xhr.appendChild($fragment);            
        }else{
            console.log("error");
            let message= xhr.statusText||"Ocurrio un error";
            $xhr.innerHTML=`ERror ${xhr.status}: ${message}`;
        }
    });
    xhr.open("GET","https://jsonplaceholder.typicode.com/user ");
    xhr.send();

})();