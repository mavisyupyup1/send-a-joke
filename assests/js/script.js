var makeYourCardEl =document.getElementById("createBtn");
var cardContainerEl = document.getElementById("card-container");
var receiverTextEl = document.getElementById("receiver-text");
var senderTextEl = document.getElementById("senderText");
var addImageBtn = document.querySelector("#add-image");
var imgUrl = "";
var jokeSetup ="";
var jokeDelivery ="";

var getJoke = function(){
    var apiJokeUrl = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas";
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
    var category = event.target.getAttribute("data-category")
    apiUrl ="https://some-random-api.ml/img/" + category
if(!category){
    apiUrl ="https://some-random-api.ml/img/cat" 
}
    console.log (apiUrl)
    //make a request to the url
    fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            console.log(data.link);
            imgUrl = data.link;
            console.log();
        })
    } else {
        alert("Poops, something went catAssTrophic");
    }
})
}

var generateCard = function(event){
    event.preventDefault();
    getJoke();
console.log("here")
cardContainerEl.textContent ="";
var recipientName = document.createElement("p")
recipientName.className = "h2";
recipientName.textContent= "Dear " + receiverTextEl.value.trim()
cardContainerEl.append(recipientName);
var addImg = `<img src="${imgUrl}"/>`;
console.log(addImg);
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