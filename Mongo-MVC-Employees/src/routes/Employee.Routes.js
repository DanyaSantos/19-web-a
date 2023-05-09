import {Router} from 'express'
const router = Router()
import * as employee from '../controllers/Employee.Controller.js'
import { verifyToken } from '../middlewares/Authorization.js';

router.post('/create-employee',verifyToken,employee.createEmployee)

export default router;