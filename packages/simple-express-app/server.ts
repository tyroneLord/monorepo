// import express from 'express';
// const app = express();
// const port = 3001;

// app.get("/data", (req, res) => {
//   res.setHeader('access-control-allow-origin', '*');
//   res.json({ foo: "bar" });
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


import express from "express";
import _ from "lodash";
import { QueryPayload } from 'simple-shared-data';
const app = express();
const port = 3001;

export interface QueryPayload {
  payload: string;
}

app.use((_req, res, next) => {
  // Allow any website to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Continue to next middleware
  next();
});

app.get("/", (_req, res) => {
  const responseData: QueryPayload = {
    payload: _.snakeCase("Server data returned successfully"),
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});