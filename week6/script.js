const APIKEY = "WBSCqMQ_y8X2_Vcm3uenXsfvVtYzQ9Gx4zKVoiA3EAo";
//Path Parameters
//http://facebook.com/hison/profile/user

//Query Parameters(Where you pass data in key-value pair)
///http://facebook.com?user=hison&type=profile&value=user

//When you are using AXIOS, you dont have to convert the promise result to
//because its already done for you by Axios

//just like Fetch, Axios is also a HTTP Client to communicate with the server
let imagesData;
const fetchesImages = async() => {
    try{
        return await axios.get(`https://api.unsplash.com/photos/?client_id=${APIKEY}`)
    }catch(error){
        console.log(error);
        alert("There was an error",error);
    }
}
const generateUI = (arrayOfImages) => {

    arrayOfImages.forEach((imageObject)=>{
        let photo = document.getElementById('photo');
        let imageContainer = document.createElement('div');

        imageContainer.innerHTML = `
        <img src=${imageObject.url}>
        <time>${modifyDate(imageObject.createdAt)}</time>
        <p>${imageObject.description}</p>
        `

        photo.appendChild(imageContainer);
    })

}

function modifyDate(date){
    let d = new Date(date);
    //let readableDate = `${d.getDate()}, ${d.getMonth}, ${d.getFullYear}`;
    return d.toLocaleDateString;
}

async function getData(){
    const { data } = await fetchesImages();
    console.log(data, "Orignal Data")
    imagesData = data.map((imageObject)=>{
        return{
            url: imageObject.urls.full,
            createdAt: imageObject.created_at,
            likes: imageObject.likes,
            description: imageObject.description || "Random Description"
        }

    })
    console.log(imagesData, "We get from API");
}

getData();