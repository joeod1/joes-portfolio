
console.log("Starting server! Awesome sauce!");
import fs from "node:fs";
import https from "node:https";
import http from "node:http";
import express from "express";

// print("aweomse");


import {createRequestHandler} from "@remix-run/express";
// const express = require("express");

import * as build from "./build/server/index.js";

const app = express();

// app.get('/', (req, res) => {
//   res.send("sup");
// })


// // needs to handle all verbs (GET, POST, etc.)
app.all(
  "*",
  createRequestHandler({
    build: build,//require("./build"),

    getLoadContext(req, res) {
      res.send("Aweomse sauce :)");
      res.end();
      return {};
    },
  })
);



// const server = https.createServer(
// //   {
// //     key: fs.readFileSync("./tls/privkey.pem"),
// //     cert: fs.readFileSync("./tls/cert.pem"),
// //   },
// //   app
// // );

https.createServer(
  {
    key: fs.readFileSync("./tls/privkey.pem"),
    cert: fs.readFileSync("./tls/cert.pem"),
  },
  app
).listen(443);
