import { Router } from "express";
const router = Router();
//importar conexion a base de datos
import {connect} from '../database.js';
import { ObjectId } from "mongodb";
//get books
router.get('/books',async (req,res)=>{
    //espera acceso a la base de datos
    const db = await connect();
    //accede a la coleccion de books, trae todos los libros y lo transforma a un arreglo
    const result = await db.collection('books').find().toArray();

    res.json({code: '200', result: result});
})
//create books
router.post('/create-book',async (req,res)=>{
    //conectar a base de datos
    const db = await connect()
    //obtener el cuerpo de la peticiona insertar en la bd
    console.log(req.body)
    const book = {
        title: req.body.title,
        description: req.body.description
    }
    //crear el libro en la bd
    const result = await db.collection('books').insertOne(book)
    console.log(result)
    res.json({
        code: "201",
        result: result.insertedId
    })
})
//update books
router.put('/update-book/:bookid',async (req,res)=>{
    //acceder al parametro
    const bookid = req.params.bookid;
   // console.log(bookid)
    const bookUpdate = {
        title: req.body.title,
        description: req.body.description
    }
    const db = await connect();
    const result = await db.collection('books').updateOne({_id: ObjectId(bookid)},{$set: bookUpdate})
    console.log(result)
    if(result.matchedCount > 0){
        res.json({code: 201, message: `Book ${bookid} has been updated`})
    }else{
        res.json({message: `we could not updated the book ${bookid}`})
    }
    return true
})
//delete books
router.delete('/delete-book/:bookid', async (req, res)=>{
    const bookid = req.params.bookid;
    const db = await connect();
    const result = await db.collection('books').deleteOne({_id: ObjectId(bookid)})
    console.log(result)
    if(result.deletedCount > 0) return res.json({code: 201, message: `Book ${bookid} has been deleted`})
    
     return   res.json({message: `we could not deleted the book ${bookid}`})
    
})
//find by title
router.get('/find-book-by-title', async (req,res)=>{
    var title = req.query.booktitle
    console.log(title)
    //query object
    const query = {title: {$eq: title}}
    const db = await connect();
    const result = await db.collection('books').find(query).toArray()
    console.log(result)
    res.json({
        message: "the following documents contains the requested title",
        result: result
    })
    return true
})
export default router