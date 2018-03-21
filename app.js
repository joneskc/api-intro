const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')

// explain what an API is (internal and external)
// use fetch to get data from an external API
// once we have data back from fetch request, how to append it to the DOM
// stretch goal: identify API's you'd like to use

// Write a function that GETs information about Luke Skywalker and add his name to the page
getLuke()


// Modify the getLuke function to also add:
  // Luke's hair color
  // Luke's height

function getLuke() {

  fetch(baseUrl + 'people/1')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);

      var name = data.name
      var skywalker = document.createElement('h2')
      skywalker.innerText = name
      characterSection.prepend(skywalker)
      var hairColor = data.hair_color
      var lukeHair = document.createElement('li')
      var height = data.height
      var lukeHeight = document.createElement('li')
      lukeHair.innerText = hairColor
      lukeHeight.innerText = height
      document.querySelector('.attributes').appendChild(lukeHair)
      document.querySelector('.attributes').appendChild(lukeHeight)
    })

}


getCharacters()

function getCharacters() {

  fetch(baseUrl + 'people')
    .then(function(people) {
      return people.json()
    })
    .then (function(allPeople) {
      console.log(allPeople)
      for (i=0; i<allPeople.results.length; i++) {
        var characterArr = allPeople.results[i].name
        console.log(characterArr)

      }
      }
    })
}


// Modify the getLuke function to also add:
  // Luke's hair color
  // Luke's height

// to the ul with the class of 'attributes'


// Uh oh, Luke's attributes are ABOVE his name!?
  // Explain why this happened
  // Modify the getLuke function to ensure Luke's attributes are below his name


// Write a function called getCharacters that:
  // Makes a fetch request to the baseUrl + '/people/ endpoint
  // console.log the resulting response


// Modify the getCharacters function to loop through the results
  // console.log each character in the array
    // (see what you're working with)
  // Capture each character's attributes in variables:
    // name
    // hair color
    // height
  // console.log each variable


// Modify the getCharacters function to append a section for each character
  // Container element (<div> or <section>)
  // <h3> with the character's name
  // <ul> with  <li>s for hair color and height
  // check out the innerHTML method