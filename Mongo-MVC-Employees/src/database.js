import mongoose from 'mongoose'
export async function connect(){
    try {
     await   mongoose.connect("mongodb://localhost:27017/JWT-Application",{
            useNewUrlParser: true,
        })
        console.log("Database connected!")
    } catch (error) {
        console.log("something went wrong!" + error)
    }
}
