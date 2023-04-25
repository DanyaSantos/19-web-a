import express,{json} from "express"
import indexRouters from "./routes/index.js"
import booksRoutes from "./routes/books.js"
const app = express();
//setting
app.set('port',3000);
//Middlewares: funcion que se ejecuta antes de consultar una ruta u otra funcion
app.use(json());
//Routes
app.use(indexRouters);
app.use(booksRoutes);
export default app;
