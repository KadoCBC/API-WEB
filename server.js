import express from 'express'
import 'dotenv/config'
import  { Usuario } from './models/Usuarios.js'


const port = process.env.PORT;
const Usuarios = Usuario;



//variavel para utilizar o express
const app = express();
//express não usa .json por padrao
app.use(express.json());



//Rota usuarios
app.post('/usuario', (req,res) => {
    Usuarios.create({
        nickname: req.body.nickname,
        password: req.body.password
    }).then( (usuario) => {
        res.send("Usuario cadastrado"+ usuario);
    }).catch( (error) => {
        res.send("erro ao cadastrar usuario" + error);
    });
});


app.get('/usuarios', (req,res) => {
    Usuarios.findAll().then( (usuarios) => {
        res.send({usuarios: usuarios})
    }).catch((erro) => {
        res.send("Erro ao buscar os dados" + erro);
    })
});


app.listen(port);
