import express from 'express'

//variavel para utilizar o express
const app = express()
//express não usa .json por padrao
app.use(express.json())



app.get('/usuarios', (req, res) => {
    
})


app.listen(3000)