# Learn Express

## How to Use

Install dependencies:

```sh
yarn
```

Start server with `node`:

```sh
node index.js
```

Start with `nodemon`:

```sh
nodemon index.js
```

Access the endpoints via browser, httpie, or Postman.

## API Endpoints

Furnitures:

| Route                           | HTTP Verb | Description                  |
| ------------------------------- | --------- | ---------------------------- |
| `/furnitures`                   | `GET`     | Get all the furnitures       |
| `/furnitures/:id`               | `GET`     | Get a single furniture       |
| `/furnitures`                   | `POST`    | Save a new furniture         |
| `/furnitures/search?name=:name` | `GET`     | Search furniture by name     |
| `/furnitures`                   | `DELETE`  | Remove all the furnitures    |
| `/furnitures/:id`               | `DELETE`  | Remove a furniture           |
| `/furnitures/:id`               | `PUT`     | Update an item with new info |
