{
    const welcome= () => {
        console.log("Cześć");
    }
    
    const showTableClick = () => {
        const themeName = document.querySelector(".themeName");
        const table = document.querySelector(".table");

        table.classList.toggle("table--display");
        if (table.classList.contains("table--display")) {
            themeName.innerText = "Pokaż"
        } else {
            themeName.innerText = "Ukryj"
        };
       
    };
    
    const init = () => {
        const button = document.querySelector(".button"); 
   
        button.addEventListener("click", showTableClick);

        welcome();
    };

    init();
}