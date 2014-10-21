node-rest
=========

Node Rest Api Example - Hapi, Joi, Mongoose, Node, Swagger, Mocha

Prerequisites
=========

- mongo version 2.6.4
- npm
- make
  
Deployment
=========

  Install dependencies:

    $ npm install

  Start mongod (in separate window)

    $ mongod

  Start application (in separate window)

    $ npm start
 
  Start tests (in same window as dependency installation)

    $ npm test
    
  Server starts at: http://localhost:3000/
  REST API docs at: http://localhost:3000/documentation


Additional Notes
==========
 - Technology choice: Node.js, Mongoose (ORM), Hapi(Rest Routes) and MongoDb(Persistence) allow people to create great REST API's very quickly with varying endpoints.  Mocha allows people to write unit and integration tests.  The seemlessly fit within the Node.js framework and can use both TDD and BDD styles. It was easy to document and expose the API with swagger.

- Versioning.  The strategy to handle versioning is to implements a base uri: http://localhost:3000, add a version number to it:http://localhost:3000/v1/ and then make it HATEOS (with something like HAL, Siren, collection+vnd).  When implemented this way, when the version number changes, clients can then rediscover any changes that have occurred by walking the links.  Old links can give either a 301 Moved permanently or 302 Found and a reference to the new location.

- Security. The POST of username/password in the body is inherently not secure.  That information should be passed in the headers.  In this case, they would be the Basic Auth headers.


##License
  MIT
