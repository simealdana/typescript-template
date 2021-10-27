import configureApp from "./index";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.SERVER_PORT;
configureApp().listen(port);
console.log(`Listening on port ${port}`);
