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
        let countryElement = document.createElement("form");
        countryElement.classList.add("country");

        //flag
        let img = document.createElement("img");
        img.src = dataWithJSON[i].flags.png;
        img.classList.add("flag");
        countryElement.appendChild(img);

        //tag contain country name and population
        let contentInfo = document.createElement("div");
        
        //country name
        let countryTitle = document.createElement("div");
        countryTitle.textContent = "Crountry Name: ";
        contentInfo.appendChild(countryTitle);
        countryTitle.setAttribute("id", "countryTitle");

        let countryName = document.createElement("div");
        countryName.textContent = dataWithJSON[i].name.common;
        contentInfo.appendChild(countryName);
        countryName.setAttribute("id", "countryName");

        //Country Population
        let populationTitle = document.createElement("div");
        populationTitle.textContent = "Population: ";
        contentInfo.appendChild(populationTitle);
        populationTitle.setAttribute("id", "populationTitle");
        
        let population = document.createElement("div");
        population.textContent = dataWithJSON[i].population;
        contentInfo.appendChild(population);
        population.setAttribute("id", "population");
        
        countryElement.appendChild(contentInfo);

        container.appendChild(countryElement);
        
    }

   
}
fetchFlag();
