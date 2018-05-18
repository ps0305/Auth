# NodeJS JWT Authentication sample

This is a NodeJS API that supports username and password authentication with JWTs

## Available APIs

### User APIs

#### POST `/users`

You can do a POST to `/users` to create a new user.

The body must have:

* `username`: uname
* `password`: upwd


It returns the following:

```json
{
  "id_token": {jwt},
  "access_token": {jwt}
}
```


## Running it

Just clone the repository, run `npm install` and then `node server.js`. That's it :).

If you want to run it on another port, just run `PORT=3001 node server.js` to run it on port 3001 for example


## Use Postman

Postman provides a powerful GUI platform to make your API development faster & easier, from building API requests through testing, documentation and sharing

