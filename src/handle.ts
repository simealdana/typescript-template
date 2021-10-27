
import { createServer, proxy } from "aws-serverless-express";
import { Context } from "aws-lambda";
import configureApp from "./index";

const app = configureApp();
const server = createServer(app);

export const handle = (event: any, context: Context) => proxy(server, event, context);
