const express = require('express')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'la-puerca-está-en-la-pocilga'
const PORT = 3000

const server = express()

server.use(express.json())
server.use('/auth',(req,res) => {
    const {email, password} = req.body

    const token = jwt.sign({email,password}, SECRET_KEY, {expiresIn: '3m'})

})

server.use('/songs',(req,res) => {

})

server.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})

