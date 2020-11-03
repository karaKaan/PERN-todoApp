const express = require("express")
const app = express()
const cors = require("cors")
const pool = require('./db');

//middleware
app.use(cors())
app.use(express.json())


//Routes

//create a todo

app.post("/todos", async(req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("insert into todo (description) values($1) returning *",[description])
        res.json(newTodo.rows[0])

    } catch (err) {
        console.error(err.message);
    }
})

//get all todos
app.get("/todos", async(req,res) => {
    try {
        const allTodos = await pool.query("select * from todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        const {id} = req.params   
        const todo = await pool.query("select * from todo where todo_id=$1", [id])
        res.json(singleTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a todo

//delete a todo


app.listen(5000, () => {
    console.log("server has started on port 5000");
})