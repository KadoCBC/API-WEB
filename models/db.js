import Sequelize from 'sequelize';
import 'dotenv/config';

const senha = process.env.SENHA_SQL; // pegando senha do .env

const sequelize = new Sequelize(
    "projeto", //nome do banco de dados
    "root", //nome do usuario
    senha, //senha
    {
        host: "localhost", //servidor onde esta rodando o banco
        dialect: "mysql" // linguagem do banco
    }
);

sequelize.authenticate().then((function(){ //then -> promisse
    console.log("Banco de dados conectado com sucesso!")
})).catch(function(error){
    console.log("erro ao se conectar com o banco de dados" + error);
});

export default sequelize;
