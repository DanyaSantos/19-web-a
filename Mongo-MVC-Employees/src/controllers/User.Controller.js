import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../config.js";

export const signup = async (req,res)=>{
    const{name,email,password}= req.body
    //encriptar contraseña antes de insertar
    const encryptPassword = bcrypt.hashSync(password,10)
    const newUser = new User({name: name, email: email, password: encryptPassword, role: "admin"})
    
    try {
        await newUser.save()
        res.json({code: 200, mesagge: "The user was created in the DB!"})
    
   } catch (error) {
    res.json({mesagge: "We could not created the user"})
   }
}

export const login = async (req, res)=>{
    const {email,password} = req.body
    //verificar que el email exista en la bd
    const findEmail = await User.find({email: email}).exec()
    console.log(findEmail)
    //si no existe enviar un mensaje de validacion
    if(findEmail.length == 0){
        res.json({"code": 400, "message": "this email does not exist!"})
    }else{
        //si existe verificar la contraseña
        console.log(bcrypt.compareSync(password, findEmail[0].password))
       if(password && bcrypt.compareSync(password, findEmail[0].password)) {
        //crear el token
        const token = jwt.sign(
            //payload - data
            {role: 'admin', id:findEmail[0]._id}, config.secret, 
            //tiempo de expiracion en segundos
            {expiresIn: 180}
            )
            res.status(200).json({token})
       }
       else{
        //no concuerdan las contraseñas
        res.status(400).json({"message": "the password does not match with the current email account!"})
       }
        //crear el token y mandarlo al cliente

    }
    return true
}
