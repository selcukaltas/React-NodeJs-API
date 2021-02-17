var cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
var app = express()
const port = 4000
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

mongoose.connect('mongodb+srv://selcuk:Ankara1.@cluster0.bfdrd.mongodb.net/baboostdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const { Schema } = mongoose;
const contactSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    comment: String,

})
const Contact = mongoose.model('contact',contactSchema)
app.post('/contact', function (req, res) {
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        comment:req.body.comment,
    })
    contact.save((err, doc) => {
        if (!err) {
            res.json(doc)
        }
        else {
            res.json(err)
        }
    })
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log("Example app listening on port port!"))