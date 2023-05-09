import {Schema,model} from 'mongoose'
const EmployeeSchema = new Schema({
    name:String,
    email: {type: String, required: true},
    dui: String,
    age: Number,
    position: String
});
export default model('Employee',EmployeeSchema)