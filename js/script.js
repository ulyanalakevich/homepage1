{
    const welcome= () => {
        console.log("Cześć");
    }
    
    const onShowTableClick = () => {
        const themeName = document.querySelector(".themeName");
        const table = document.querySelector(".table");

        table.classList.toggle("table--display");
        table.classList.contains("table--display") ?
            themeName.innerText = "Pokaż" :
            themeName.innerText = "Ukryj";
       
    };
    
    const init = () => {
        const button = document.querySelector(".button"); 
   
        button.addEventListener("click", onShowTableClick);

        welcome();
    };

    init();
}