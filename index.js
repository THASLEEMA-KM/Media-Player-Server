// import json-server
const jsonServer = require('json-server')

// create server for media player
const MPServer = jsonServer.create()

// create middleware used by JSON server
const middleware = jsonServer.defaults()

// set up route fro json file in server
const route = jsonServer.router('db.json')

// set up pot for running server app
const PORT = 3000 || process.env.PORT


MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>
{
    console.log(`Media Player Server Startedat Port ${PORT} and waiting for client Request`);
})