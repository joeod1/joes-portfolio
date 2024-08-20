import fs from "node:fs";
import https from "node:https";
import path from "node:path";

import remix from "@remix-run/express";
import express from "express";

// const BUILD_DIR = path.resolve(__dirname, "build");
// const build = require(BUILD_DIR);

const app = express();

app.all(
    "*",
    remix.createRequestHandler({
        build: require("./build/server")
    })
);


const server = https.createServer(
  {
    key: fs.readFileSync("./tls/privkey.pem"),
    cert: fs.readFileSync("./tls/cert.pem"),
  },
  app
);

const port = 443;
server.listen(port, () => {});
