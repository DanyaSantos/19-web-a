import {Router} from "express";

const router = Router();
router.get('/main',(req,res)=>{
    res.send('welcome devf');
})
export default router