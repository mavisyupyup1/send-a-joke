var makeYourCardEl =document.getElementById("createBtn");
var cardContainerEl = document.getElementById("card-container");
var receiverTextEl = document.getElementById("receiver-text");
var senderTextEl = document.getElementById("senderText");
var addImageBtn = document.querySelector("#add-image");
console.log(addImageBtn)
var createBtnHandler =function(){
    event.preventDefault();
getJoke();
//getImage();
createCard();
}

var getJoke = function(category){
    var apiUrl = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas";

    //make a request to the url
    fetch(apiUrl)
    .then(function(response){
    if(response.ok){
        response.json().then(function(data){
            console.log(data.setup);
            console.log(data.delivery);
        })
    } else {
        alert("Poops, something went catAssTrophic" );
    }
})
}
var addImageHandler = function(event){
    event.preventDefault();
    var category = event.target.getAttribute("data-category")
    console.log(category);
    var apiUrl ="https://some-random-api.ml/img/" + category
    console.log (apiUrl)
    //make a request to the url
    fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            createCard(data.link);
        })
    } else {
        alert("Poops, something went catAssTrophic");
    }
})
}

var createCard = function(){
var recipientName = document.createElement("p")
recipientName.className = "h2";
recipientName.textContent= "Dear " + receiverTextEl.value.trim();
cardContainerEl.append(recipientName);
var senderName = document.createElement("p")
senderName.className ="h3";
senderName.textContent = "From " + senderTextEl.value.trim();
cardContainerEl.append(senderName);

}


makeYourCardEl.addEventListener("click", createBtnHandler)
addImageBtn.addEventListener("click", addImageHandler);
