let resultsArea = document.querySelector("#my-results-area");

let myApiData = {
  "data" : [
    {
      "owner": "root",
      "images": {
        "original": {
          "url" : "https://www.youtube.com/s/desktop/d4eb50c8/img/favicon_32x32.png",
          "age" : 23,
          "language": "en"
        },
        "new": {
          "url" : "https://pokemon.co/images/anitya.html",
          "age" : 11,
          "language": "es"
        },
      }
    },
    {
      "owner": "root",
      "images": {
        "original": {
          "url" : "https://a.espncdn.com/favicon.ico",
          "age" : 42,
          "language": "en"
        },
        "new": {
          "url" : "https://pokemon.co/images/doug.html",
          "age" : 10,
          "language": "es"
        },
      }
    },
    {
      "owner": "root",
      "images": {
        "original": {
          "url" : "https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.337/favicon.ico",
          "age" : 23,
          "language": "en"
        },
        "new": {
          "url" : "https://pokemon.co/images/evans.html",
          "age" : 11,
          "language": "es"
        },
      }
    }
  ]
};
console.log(myApiData);
displayResults(myApiData);    // two different ways to accomplish the same thing
displayResults2(myApiData);   // same effect as displayResult

function displayResults(apiData) {                   // old-fashioned for loop
  for (let i = 0; i < apiData.data.length; i++) {
    resultsArea.innerHtml += `
      <img src=${apiData.data[i].images.original.url}>
    `
  }
}

function displayResults2(apiData) {                  // forEach loop
  apiData.data.forEach(function(element){
    resultsArea.innerHTML += '<img src="' + element.images.original.url + '">';
  });
}