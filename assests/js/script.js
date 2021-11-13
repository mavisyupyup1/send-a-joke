var makeYourCardEl =document.getElementById("createBtn");
var cardContainerEl = document.getElementById("card-container");
var receiverTextEl = document.getElementById("receiver-text");
var senderTextEl = document.getElementById("senderText");
var addImageBtn = document.querySelector("#add-image");
var addJokeBtn = document.getElementById("occasion");
console.log(addJokeBtn)
var imgUrl = "";
var jokeSetup ="";
var jokeDelivery ="";
var loader = document.querySelector(".loader")

var getJoke = function(event){
    event.preventDefault();
    console.log("here")
    var apiJokeUrl = "https://v2.jokeapi.dev/joke/Programming,Christmas";
console.log(apiJokeUrl)
    //make a request to the url
    fetch(apiJokeUrl)
    .then(function(response){
    if(response.ok){
        response.json().then(function(data){
            console.log(data)
            console.log(data.type)
            if(data.type === "twopart"){
                console.log("twopart")
            jokeSetup = data.setup;
            console.log(data.setup)
            jokeDelivery = data.delivery;
            console.log(jokeDelivery)
             } else {
                 console.log("single")
            jokeSetup = data.joke 
            jokeDelivery = '';
        console.log(jokeSetup)}
        })
    } else {
        alert("Poops, something went catAssTrophic" );
    }
})
}
var addImageHandler = function(event){
   event.preventDefault();
    var category = event.target.getAttribute("data-category");
    if (category === "koala" || category === "panda") {
    apiUrl ="https://some-random-api.ml/img/" + category;
    console.log(apiUrl)
    //make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data.link);
            imgUrl = data.link;})});}

if(category ==="dog"){
        apiUrl = "https://dog.ceo/api/breeds/image/random"
        console.log(apiUrl)
        fetch(apiUrl)
        .then(function(response){
            response.json().then(function(data){
                imgUrl =data.message
            console.log(imgUrl)})});
}if(category  === "cat"){
        apiUrl ="https://api.thecatapi.com/v1/images/search" 
        console.log(apiUrl)
        fetch(apiUrl)
        .then(function(response){
            response.json().then(function(data){
              console.log(data[0].url)
              imgUrl = data[0].url
            console.log(imgUrl)})});
    // else {
    //     alert("Poops, something went catAssTrophic");
    // }
}
}

var generateCard = function(event){
    event.preventDefault();

cardContainerEl.textContent ="";
var recipientName = document.createElement("p")
recipientName.className = "h2";
recipientName.textContent= "Dear " + receiverTextEl.value.trim()
cardContainerEl.append(recipientName);
var addImg = `<img src="${imgUrl}"/>`;
var imgContainer = document.createElement("p");
imgContainer.className="card-img";
imgContainer.append(addImg);
console.log(imgContainer);
var jokeContent = document.createElement("p");
jokeContent.className = "p";
jokeContent.innerHTML = jokeSetup + '<br>' + jokeDelivery +'<br>'+ "<p>" + addImg + "<p>" ;
cardContainerEl.append(jokeContent);
console.log(jokeSetup+ jokeDelivery);
var senderName = document.createElement("p")
senderName.className ="h3";
senderName.textContent = "From " + senderTextEl.value.trim();
cardContainerEl.append(senderName);
}


makeYourCardEl.addEventListener("click", generateCard)
addImageBtn.addEventListener("click", addImageHandler)
addJokeBtn.addEventListener("click",getJoke);
// $(document).on("load",".card-img",function(){
//     $(loader).classList.add(".disappear")
// })