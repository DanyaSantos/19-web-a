import Employee from "../models/Employee.js";

export const createEmployee = async (req,res)=>{
    console.log("after the middleware")
    const {name,email,age,dui,position} = req.body
    const newEmployee = new Employee({name:name, email:email, age:age, dui:dui, position:position})
    try {
        await newEmployee.save()
        return res.json({code: 200 ,message: "the employee was created"})
    } catch (error) {
        return res.json({code:400 , message: "not created"})
    }
}