var getJokeBtn =document.getElementById("get-joke-btn");
var cardContainerEl = document.getElementById("card-container");
var receiverTextEl = document.getElementById("receiver-text");
var senderTextEl = document.getElementById("senderText");
var addImageBtn = document.querySelector("#add-image");
var addJokeBtn = document.getElementById("occasion");
console.log(addJokeBtn)
var occasionTextEl = document.getElementById("occasion-text")
var saveBtn = document.querySelector("#save-button");
var receiverNameEl =document.getElementById("receiver-name");
var senderNameEl =document.getElementById("sender-name");
var jokeSetupEl = document.querySelector(".joke-setup-text");
var jokeDeliveryEl = document.querySelector(".joke-delivery-text");
var jokeTextEl = document.getElementById("joke-text")
var cardImageEl =document.getElementById("placeholder-img")
console.log(cardImageEl)
var imgUrl = "";
var jokeSetup ="";
var jokeDelivery ="";
var loader = document.querySelector(".loader")

var getJoke = function(event){
    event.preventDefault();
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
            jokeDelivery = data.delivery;
             } else {
                 console.log("single")
            jokeSetup = data.joke 
            jokeDelivery = '';
             }
            jokeTextEl.textContent=""
            var jokeSetupText = document.createElement("p")
            jokeSetupText.textContent = jokeSetup;
            console.log(jokeSetupText)
            jokeTextEl.append(jokeSetupText);
            var jokeDeliveryText = document.createElement("p")
            jokeDeliveryText.textContent = jokeDelivery;
            jokeTextEl.append(jokeDeliveryText)
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
    //make a request to the url
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data.link);
            imgUrl = data.link;})});} if(category ==="dog"){
        apiUrl = "https://dog.ceo/api/breeds/image/random"
        fetch(apiUrl)
        .then(function(response){
            response.json().then(function(data){
                imgUrl =data.message
            console.log(imgUrl)})}); }if(category  === "cat"){
        apiUrl ="https://api.thecatapi.com/v1/images/search" 
        fetch(apiUrl)
        .then(function(response){
            response.json().then(function(data){
              imgUrl = data[0].url
            console.log(imgUrl)})});}
     else {
         alert("Poops, something went catAssTrophic");
    };
writeImg()}

    var writeImg = function(event){
        event.preventDefault();

    console.log(imgUrl)

    var addImg = `<img src="${imgUrl}"/>`;
var imgContainer = document.createElement("p");
imgContainer.className="card-img";
imgContainer.append(addImg);
console.log(imgContainer);
var addImg = `<img src="${imgUrl}"/>`;

var imgContainer = document.createElement("p");
imgContainer.append(addImg);
cardImageEl.parentNode.replaceChild(imgContainer,cardImageEl)
    }


getJokeBtn.addEventListener("click", getJoke)
addImageBtn.addEventListener("click", addImageHandler)
addJokeBtn.addEventListener("click",getJoke)
$(document).on("load",".card-img",function(){
    $(loader).classList.add(".disappear")
})
receiverTextEl.addEventListener("keyup",function(event){
    receiverNameEl.innerText = event.target.value
})
senderTextEl.addEventListener("keyup",function(event){
    senderNameEl.innerText = event.target.value
})
addJokeBtn.addEventListener("click", function(event){
 occasionTextEl.innerText = event.target.textContent
})

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
  
    html2canvas(cardContainerEl, {
        allowTaint: true,
        logging: true,
        useCORS:true
    }).then(function(canvas){
        let myImage = canvas.toDataURL("image/png");
        downloadURI("data:" + myImage, "Sendajoke.png");
    });
  });

  function downloadURI(uri, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
  }
