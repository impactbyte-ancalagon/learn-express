const fetch = require("node-fetch")

fetch("https://swapi.co/api/people/")
  .then(response => {
    return response.json()
  })
  .then(data => {
    const people = data.results
    people.forEach(person => {
      console.log(person.name)
    })
  })
  .catch(error => {
    console.log(error)
  })
