# SoFast!

Sofast is a ecommerce project, full implementation of backend ( Using [Node.js](https://nodejs.org) , [express.js](https://expressjs.com/)).

Web Frontend : [React.js](https://nodejs.org).

State Management(Web): [Redux](https://redux.js.org/)

Mobile : [Flutter](https://flutter.dev/).

State Management(Mobile) : [MobX](),[RxDart]().

Dependency Injection : [Provider]()

Api: http://localhost:7000/api/v1

## Developer Mode

```
npm i
npm run dev
```

## Production Mode

```
npm i
npm run prod
```

## API

### Auth-Api

## create User

| Endpoints | Method | Description |
| --------- | ------ | ----------- |
| /register | POST   | Create User |

```
{
    "name" : "Suman Manna",
    "email" : "manna.suman@gmail.com",
    "password" : "xyu!jd12134d"
}
```

response

```
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWJmZTc2N2JiMzEwNTQyODM4YTYyZCIsImlhdCI6MTYyMDg5Mjc5OCwiZXhwIjoxNjIxNDk3NTk4fQ.WQqyZoAog-mm11dHa1EPp9qOS2LXIIYseHPZVXOi5zY"
}
```

## login

| Endpoints | Method | Description |
| --------- | ------ | ----------- |
| /login    | GET    | login       |

```
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOWJmZTc2N2JiMzEwNTQyODM4YTYyZCIsImlhdCI6MTYyMDkyMDYxNSwiZXhwIjoxNjIxNTI1NDE1fQ.GHjKjO3CAQzxKOTyrwjDO85oJcVyoSIovKk56As8CDM",
    "user": {
        "avatar": {
            "role": "user",
            "public_id": "avatars/greg_vrz9ng",
            "url": "https://res.cloudinary.com/sofast/image/upload/v1620819874/avatars/greg_vrz9ng.jpg",
            "createdAt": "2021-05-12T16:12:38.756Z"
        },
        "_id": "609bfe767bb310542838a62d",
        "name": "Suman Manna",
        "email": "manna.suman@gmail.com",
        "password": "$2a$10$fw/2C9K1HpSe56U7nsLE5.S2k8LSlvtgRebAnsHF8sXmwXZYF.73.",
        "__v": 0
    }
}
```

## logout

| Endpoints | Method | Description |
| --------- | ------ | ----------- |
| /logout   | GET    | logout      |

```
{
    "success": true,
    "message": "Successfully loggedout!"
}
```

### Product-Api

| Endpoints          | Method | Description                  |
| ------------------ | ------ | ---------------------------- |
| /product           | GET    | Get All products             |
| /admin/product/new | POST   | Create a Product             |
| /product/:id       | GET    | Get product details by Id    |
| /product/:id       | PUT    | Update product details by Id |
| /product/:id       | DELETE | Delete product by Id         |

### filters

| endpoints              | filters                        | Description                              |
| ---------------------- | ------------------------------ | ---------------------------------------- |
| /product               | ?keyword=Apple                 | Get All apple's products                 |
| /product?keyword=Apple | &category=Electronics          | Get All Electronics apple's products     |
| /product?keyword=Apple | &page=1                        | display 4 products each pages.           |
| /product?keyword=Apple | price[gte]=540&price[lte]=1000 | display products price range 540 to 1000 |
