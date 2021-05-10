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

### Product-Api

| Endpoints          | Method | Description                  |
| ------------------ | ------ | ---------------------------- |
| /product           | GET    | Get All products             |
| /admin/product/new | POST   | Create a Product             |
| /product/:id       | GET    | Get product details by Id    |
| /product/:id       | PUT    | Update product details by Id |
| /product/:id       | DELETE | Delete product by Id         |
