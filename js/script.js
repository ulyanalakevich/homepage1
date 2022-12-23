console.log("Cześć")

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
let table = document.querySelector(".table");
button.addEventListener("click", () => {
    table.classList.toggle("table--display");
    if (table.classList.contains("table--display")) {
        themeName.innerText = "Pokaż"
    } else {
        themeName.innerText = "Ukryj"
    }
})
