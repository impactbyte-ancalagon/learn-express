const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// Declare initial furnitures data

let furnitures = {
  next_id: 6,
  data: [
    {
      id: 1,
      name: "Gayung",
      price: 15000
    },
    {
      id: 2,
      name: "Ember",
      price: 20000
    },
    {
      id: 3,
      name: "Bakwan Pel",
      price: 45000
    },
    {
      id: 4,
      name: "Wajan",
      price: 80000
    },
    {
      id: 5,
      name: "Baskom",
      price: 21000
    }
  ]
}

// Get Hello World

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
    headers: req.headers
  })
})

// Get all furnitures

app.get("/furnitures", (req, res) => {
  res.send({
    count: furnitures.data.length,
    data: furnitures.data
  })
})

// Search furniture by name

app.get("/furnitures/search", (req, res) => {
  const queryName = req.query.name.toLowerCase()

  const foundFurniture = furnitures.data.find(furniture => {
    return furniture.name.toLowerCase().includes(queryName)
  })

  res.send({
    query: req.query,
    data: foundFurniture
  })
})

// Get furniture by id

app.get("/furnitures/:id", (req, res) => {
  const furniture = furnitures.data.find(furniture => {
    return furniture.id === Number(req.params.id)
  })

  res.send({
    data: furniture
  })
})

// Save new furniture

app.post("/furnitures", (req, res) => {
  const newFurniture = {
    id: furnitures.next_id,
    name: req.body.name,
    price: req.body.price
  }

  const newFurnitures = {
    next_id: furnitures.next_id + 1,
    data: furnitures.data.concat(newFurniture)
  }

  furnitures = newFurnitures

  res.send({
    newData: newFurniture,
    data: furnitures
  })
})

app.listen(port, err => {
  console.log(`Server running at http://localhost:${port}`)
})
