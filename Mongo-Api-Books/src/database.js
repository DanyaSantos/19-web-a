import { MongoClient } from "mongodb"
export async function connect() {
try {
        const client = await MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true})
        const db = client.db('DevF-DB')
        console.log("Database connected")
        return db
        
    } catch (error) {
        console.log("Something went wrong" + error)
    }
}