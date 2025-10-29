import express from 'express'
import 'dotenv/config'
import  { Usuario } from './models/Usuarios.js'


const port = process.env.PORT;
const Usuarios = Usuario;



//variavel para utilizar o express
const app = express();
//express não usa .json por padrao
app.use(express.json());



//POST USUARIOS
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

//GET ALL USUARIOS
app.get('/usuarios', (req,res) => {
    Usuarios.findAll().then( (usuarios) => {
        res.send({usuarios: usuarios});
    }).catch((erro) => {
        res.send("Erro ao buscar os dados" + erro);
    })
});

//GET by ID USUARIOS
app.get('/usuario/:id', (req,res) => {
    Usuarios.findByPk(req.params.id).then( (usuario) => {
        res.send({usuario});
    }).catch((erro) => {
        res.send("Erro ao buscar o dado" + erro);
    })
});

// PATCH by ID USUARIOS
app.patch('/usuario/:id', (req,res) => {
    Usuarios.update(
        { age: req.body.age },
        {
            where: { id: req.params.id }
        }
    ).then( (usuario) => {
        res.send({usuario: usuario}); // Está atualizando certo, porém a resposta do res.send não esta sendo a ideal -> investigar
    }).catch((erro) => {
        res.send("Erro ao atualizar o usuario" + erro)
    }) 
});

// DELETE by ID USUARIOS
app.delete('/usuario/:id', (req,res) => {
    Usuarios.destroy(
        {
            where: { id: req.params.id }
        }
    ).then( (usuario) => {
        res.send({usuario: usuario});
    }).catch((erro) => {
        res.send("Erro ao deletar o usuario" + erro)
    }) 
});

app.listen(port);
