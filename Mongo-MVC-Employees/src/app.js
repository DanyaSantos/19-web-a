import express from 'express';
const app = express();
//importar rutas
import authenticationRoutes from './routes/User.Routes.js'
import employeeRoutes from './routes/Employee.Routes.js'
//designar middlewares
//configuraciones globales
app.use(express.json());
app.use(authenticationRoutes)
app.use(employeeRoutes)
export default app;