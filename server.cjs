const fs = require("node:fs");
const https = require("node:https");
// const http = require("node:http");

const {
  createRequestHandler,
} = require("@remix-run/express");
const express = require("express");

const app = express();

// needs to handle all verbs (GET, POST, etc.)
app.all(
  "*",
  createRequestHandler({
    build: require("./build"),

    getLoadContext(req, res) {
      return {};
    },
  })
);



const server = https.createServer(
  {
    key: fs.readFileSync("./tls/privkey.pem"),
    cert: fs.readFileSync("./tls/cert.pem"),
  },
  app
);

// const server = http.createServer(
//   app
// );

const port = 443;
server.listen(port, () => {});
