
$("#btn").click(function(){

    $("#extra-cursos").fadeIn(1000);
   
})


let barra = document.getElementById("barra");
let nav = document.querySelector(".nav");


barra.addEventListener('click',function(){
    nav.classList.toggle("abrir");
});

