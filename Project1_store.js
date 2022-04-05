// Timed Sale banner
function sale() {
    document.getElementById("banner").style.display = "none";
}
setTimeout(sale, 15000);
function final() { document.getElementById("banner").style.display = "none"; }



// Navigation/Menu button

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Dog API
const dogUrl = "https://dog.ceo/api/breeds/image/random"

fetch(dogUrl)
    .then((data) => data.json())
    .then((dogRandom) => generateDogsDiv(dogRandom));
    
const generateDogsDiv = (dogRandom) => {
    const dog = dogRandom.message;
    const dogImg = document.createElement('img');
    const dogName = document.createElement('p');
    let dogNameFormatted = "";

    dogImg.src = dog;
    dogImg.style.width = "100px"

    let dogArray = dog.split("breeds/");
    dogArray = dogArray[1].split("/");
    dogNameUnformatted = dogArray[0];
    
    if (dogNameUnformatted.includes("-")) {
        let arr = dogNameUnformatted.split("-").reverse();

        arr.forEach(e => {
            e = e.toUpperCase();
            dogNameFormatted += `${e} `;
        });
    } else {
        dogNameFormatted = dogNameUnformatted.toUpperCase();
    }
    dogName.textContent = dogNameFormatted;

    document.getElementById("random-dog").appendChild(dogName);
    document.getElementById("random-dog").appendChild(dogImg);
}