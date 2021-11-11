var getJoke = function(category){
    var apiUrl = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas";

    //make a request to the url
    fetch(apiUrl)
    .then(function(response){
    if(response.ok){
        response.json().then(function(data){
            console.log(data);
})

    }
})
}
getJoke();

var getImage = function(category){
    var dogApiUrl = "https://dog.ceo/api/breeds/image/random";
    var catApiUrl = "https://api.thecatapi.com/v1/images/search";
    var koalaApiUrl ="https://some-random-api.ml/img/koala"
    var birdApiUrl ="https://some-random-api.ml/animal/birb"
    //make a request to the url
    fetch(birdApiUrl)
    .then(function(response){
    if(response.ok){
        response.json().then(function(data){
            console.log(data);
})

    }
})
}
getImage();


