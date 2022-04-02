// Timed Sale banner
function sale(){
    document.getElementById("banner").style.display="none";}
     setTimeout(sale,15000);
function final(){document.getElementById("banner").style.display = "none";}

    

// Navigation/Menu button

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById("hamburgerBtn");
x.onclick=toggleMenu;

