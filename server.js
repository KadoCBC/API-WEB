import express from 'express'
import 'dotenv/config';

const port = process.env.PORT;

//variavel para utilizar o express
const app = express()
//express não usa .json por padrao
app.use(express.json())

//Rota usuarios



app.get('/usuarios', (req, res) => {
    
})


app.listen(port);
