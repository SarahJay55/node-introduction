//Create an app that is listening on 3000

var express = require('express')
var bodyParser =  require('body-parser')
var bookController = require('./controllers/books_controller')

var app = express();

app.use(bodyParser.json())

app.get('/api/books/', bookController.read)
app.get('/api/books/:id', bookController.readById)
app.put('/api/books/:id', bookController.update)
app.post('/api/books', bookController.create)
app.delete('/api/books/:id', bookController.delete)


app.listen(3000, function() {
    console.log("Listening on 3000")
})