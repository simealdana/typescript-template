import express from "express";
import { urlencoded } from "body-parser";
import cors from "cors";
import { eventContext } from "aws-serverless-express/middleware";
import swaggerUi from "swagger-ui-express";
import Router from "./routers/books";

const configureApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(urlencoded({ extended: true }));
  app.use(eventContext());
  const swaggerDoc = require('./swagger.json');
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc)
  );

  app.use(Router);

  return app;
};

export default configureApp;
