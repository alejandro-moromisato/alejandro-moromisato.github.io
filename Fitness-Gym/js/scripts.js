
let ubicacionPrincipal = window.pageYOffset; /* Indica de manera vertical en que parte de la pagina se esta ubicado */

window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
});

let enlacesHeader = document.querySelector(".enlaces-header");

console.log(enlacesHeader);

document.querySelector(".bar").addEventListener("click", function(){
        enlacesHeader.classList.toggle("abrir");
})