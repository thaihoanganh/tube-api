require("dotenv").config();
import express, { Application } from "express";

import { CONFIG } from "./config";

import { getlinkController } from "./controllers";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tube", getlinkController);

try {
  app.listen(CONFIG.port, (): void => {
    console.log(`Connected successfully on PORT ${CONFIG.port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
