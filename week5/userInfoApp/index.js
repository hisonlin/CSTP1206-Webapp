async function fetchMeUserInfo(){
    let data = await fetch("https://reqres.in/api/users");
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON.data;
    
    createUI(finalOutputArray)
    
    }

function createUI(finalOutputArray){

    let container = document.querySelector("#maincontainer");
    

    for (let i = 0; finalOutputArray.length; i++){
        //Main parent tag which will have a class called "card")
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        //image tag which will hold the user image
        let img = document.createElement("img");
        img.src = finalOutputArray[i].avatar;
        img.classList.add("avatar");
        cardElement.appendChild(img);

        //creatre a div element for name and email(parent)
        let contentInfo = document.createElement("div");

        //creatre a p element for full name of the user
        let fullName = document.createElement("p");
        fullName.textContent = `${finalOutputArray[i].first_name} ${finalOutputArray[i].last_name}`;
        contentInfo.appendChild(fullName);

        //creatre a p element for email of the user
        let email = document.createElement("p");
        email.textContent = finalOutputArray[i].email;
        contentInfo.appendChild(email);

        cardElement.appendChild(contentInfo);

        //final container containing all the card
        container.appendChild(cardElement);
        console.log(finalOutputArray[i].id);
    }
}
fetchMeUserInfo();