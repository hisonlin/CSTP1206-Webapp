async function fetchFlag(){
    let data = await fetch("https://restcountries.com/v3.1/all");
    let dataWithJSON = await data.json();
    console.log (dataWithJSON);
    createUI(dataWithJSON);
    
}

function createUI(dataWithJSON){
    let container = document.querySelector("#maincontainer");
    

    for (let i = 0; dataWithJSON.length; i++){
        
        //Main parent tag
        let countryElement = document.createElement("div");
        countryElement.classList.add("country");

        //flag
        let img = document.createElement("img");
        img.src = dataWithJSON[i].flags.png;
        img.classList.add("flag");
        countryElement.appendChild(img);

        let contentInfo = document.createElement("div");
        
        //country name
        let countryName = document.createElement("div");
        countryName.textContent = dataWithJSON[i].name.common;
        contentInfo.appendChild(countryName);

        //Country Population
        let population = document.createElement("div");
        population.textContent = dataWithJSON[i].population;
        contentInfo.appendChild(population);
        
        countryElement.appendChild(contentInfo);

        container.appendChild(countryElement);
        
    }

   
}
fetchFlag();