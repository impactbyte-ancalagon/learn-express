const express = require("express")

const app = express()
const port = 3000

const furnitures = [
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

app.get("/", (req, res) => {
  res.send({
    message: "Hello World"
  })
})

app.get("/furnitures", (req, res) => {
  res.send({
    count: furnitures.length,
    data: furnitures
  })
})

app.get("/furnitures/:id", (req, res) => {
  res.send({
    data: furnitures.find(furniture => {
      return furniture.id === Number(req.params.id)
    })
  })
})

app.listen(port, err => {
  console.log(`Server running at http://localhost:${port}`)
})
