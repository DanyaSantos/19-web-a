import app from './app.js'
import {connect} from './database.js'
connect()
app.listen(3000)
console.log("server is up!")