import express from "express"
import indexRouters from "./routes/index.js"
import booksRoutes from "./routes/books.js"
const app = express();
//setting
app.set('port',3000);
//Middlewares
//Routes
app.use(indexRouters);
app.use(booksRoutes);
export default app;
