var randomNumber = function (min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min) ;
    return value;
};
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
var imgUrl = "";
var jokeSetup ="";
var jokeDelivery ="";
var loader = document.querySelector(".loader")

var getJoke = function(event){
    event.preventDefault();
    if(randomNumber(1,2) === 1){
    var apiJokeUrl = "https://v2.jokeapi.dev/joke/Programming,Christmas";}
    else{
    var apiJokeUrl ="https://api.icndb.com/jokes/random?firstName=John&lastName=Doe"}

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
             } if(data.type === "single") {
        
            jokeSetup = data.joke 
            jokeDelivery = '';
             } if(data.type === "success"){
                 jokeSetup = data.value.joke
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
        if (category === "holiday") {
        imgUrl ="./assests/images/holiday-" + randomNumber(1,14)+".jpg"
        console.log(imgUrl)
            } if(category ==="dog"){
                imgUrl ="./assests/images/dog-" + randomNumber(1,12)+".jpg"
            console.log(imgUrl)
        }if(category  === "cat"){
        
              imgUrl = "./assests/images/cat-" + randomNumber(1,12)+".jpg"
            console.log(imgUrl);
        }if(category === "koala") {
            imgUrl = "./assests/images/koala-" + randomNumber(1,20)+".jpg"
        } if(category === "birthday") {
            imgUrl = "./assests/images/birthday-" + randomNumber(1,14)+".jpg"
        }
writeImg()}

    var writeImg = function(event){
    console.log(imgUrl)
    var placeholderImg=document.getElementById("placeholder-img")
    console.log(placeholderImg.src)  
placeholderImg.src =`${imgUrl}`
console.log(placeholderImg.src)

var addImg = `<img src="${imgUrl}"/>`;
console.log(addImg)
// var imgContainer = document.createElement("p");
// imgContainer.append(addImg);
// cardImageEl.parentNode.replaceChild(imgContainer,cardImageEl)
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
