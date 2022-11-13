const express = require('express')
const mysql= require('mysql2')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Essy2911',
    password: 'gather2911',
    database: ''
  });

app.get('/', (req, res)=>{
    res.send('')
})

app.get('/todos', (req, res)=>{
    const todos = [
        {
            name: 'going to work',
            completed: false
        },
        {
            name: 'going to school',
            completed: true
        },
        {
            name: 'going to church',
            completed: true
        }
    ]
    res.render('index', {name: "Emma", todos: todos})
})


const port = 2

app.listen(port, ()=>{
    console.log(`Server is running on port ${1+1}`)
    console.log('server is running on port ' + port)
})