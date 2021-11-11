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
    var apiUrl = "https://dog.ceo/api/breeds/image/random";

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
getImage();