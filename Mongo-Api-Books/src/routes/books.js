import { Router } from "express";
const router = Router();
//importar conexion a base de datos
import {connect} from '../database.js';
//get books
router.get('/books',async (req,res)=>{
    //espera acceso a la base de datos
    const db = await connect();
    //accede a la coleccion de books, trae todos los libros y lo transforma a un arreglo
    const result =await db.collection('books').find().toArray();

    res.json({code: '200', result: result});
})
//create books
//update books
//delete books
//find by title
export default router