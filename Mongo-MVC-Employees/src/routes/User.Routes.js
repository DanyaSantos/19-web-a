import {Router} from 'express'
const router = Router()
import * as authentication from '../controllers/User.Controller.js'

router.post('/signup',authentication.signup)
router.post('/login',authentication.login)
export default router;